import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signup } from "../../services/Student";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  // get navigate function
  const navigate = useNavigate();

  const onSignup = async () => {
    if (firstName.length == 0) {
      toast.warn("Please enter first name");
    } else if (lastName.length == 0) {
      toast.warn("Please enter last name");
    } else if (email.length == 0) {
      toast.warn("Please enter email");
    } else if (phone.length == 0) {
      toast.warn("Please enter phone number");
    } else if (password.length == 0) {
      toast.warn("Please enter password");
    } else if (confirmPassword.length == 0) {
      toast.warn("Please confirm password");
    } else if (password != confirmPassword) {
      toast.warn("Password does not match");
    } else {
      const result = await signup(firstName, lastName, email, password, phone);
      if (result["status"] == "success") {
        toast.success("Successfully registered a new admin");

        // go back
        navigate(-1);
      } else {
        toast.error(result["error"]);
      }
    }
  };

  return (
    <body
      style={{
        backgroundImage: "url('/image/logn.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
      }}
    >
      <div>
        <div className="row">
          <div className="col"></div>
          <div
            className="col"
            style={{ backgroundColor: "white", marginTop: "20px" }}
          >
            
            <div class="flex justify-center mt-4">
              <span class="bg-yellow-100 text-yellow-800 text-lg font-medium me-2 px-10.5 py-7.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">
                Register
              </span>
            </div>

            <div className="mb-3">
              <label htmlFor="">
                <b>First Name</b>
              </label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">
                <b>Last Name</b>
              </label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">
                <b>Email</b>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">
                <b>Phone Number</b>
              </label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">
                <b>Password</b>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">
                <b>Confirm Password</b>
              </label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <div>
                <b> Already have an account? </b>
                <a
                  href="/login"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Login
                </a>
              </div>
              <button onClick={onSignup} className="mt-3 btn btn-success">
                Signup
              </button>
            </div>
            <b> Go to home? </b>
            <a
              href="/home"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Home
            </a>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </body>
  );
}

export default Register;
