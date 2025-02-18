import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../services/Student";
import img from "../../images/User/logn.jpg";

function Register() {
  const [id, setId] = useState(3);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phno, setPhno] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("Learner");

  const navigate = useNavigate();

  const onSignup = async () => {
    if (userName.length === 0) {
      toast.warn("Please enter your username");
    } else if (email.length === 0) {
      toast.warn("Please enter your email");
    } else if (phno.length === 0) {
      toast.warn("Please enter your phone number");
    } else if (password.length === 0) {
      toast.warn("Please enter your password");
    } else if (confirmPassword.length === 0) {
      toast.warn("Please confirm your password");
    } else if (password !== confirmPassword) {
      toast.warn("Passwords do not match");
    } else if (dob.length === 0) {
      toast.warn("Please enter your date of birth");
    } else if (gender.length === 0) {
      toast.warn("Please select your gender");
    } else {
      try {
        // Prepare the request body
        const roleValue = role === "Learner" ? 1 : 2;

        const requestBody = {
          userName,
          email,
          password,
          phno,
          dob: new Date(dob).toISOString().split("T")[0],
          gender,
          role: roleValue, // Ensure role is sent as int
        };

        console.log("Request Body:", requestBody);

        // Call the signup API
        const result = await signup(requestBody);

        if (result.status === "success") {
          toast.success("Successfully registered a new user");
          navigate("/Login");
        } else {
          toast.error(result.error || "Registration failed");
        }
      } catch (error) {
        toast.error("An error occurred during signup: " + error.message);
      }
    }
  };
  // const [userName, setuserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [phno, setphno] = useState("");
  // const [dob, setdob] = useState("");
  // const [gender, setgender] = useState("");
  //  const [role, setrole] = useState("");
  // const formattedRole = role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();


  // // get navigate function
  // const navigate = useNavigate();

  // const onSignup = async () => {
  //   if (!userName || !email || !password || !confirmPassword || !phno || !dob || !gender || !role) {
  //     toast.warn("Please fill all fields");
  //     return;
  //   }
  //   if (password !== confirmPassword) {
  //     toast.warn("Passwords do not match!");
  //     return;
  //   }
  
  //   try {
  //     // Convert role to match the expected backend format
  //     const formattedRole = role === "Admin" ? 0 : 1;
  
  //     const result = await signup(userName, email, password, phno, dob, gender, formattedRole);
  
  //     if (result.message === "User registered successfully") {
  //       toast.success("Successfully registered!");
  //       navigate("/login"); // Redirect to login after successful registration
  //     } else {
  //       toast.error(result.message || "Registration failed");
  //     }
  //   } catch (error) {
  //     toast.error("An error occurred during signup");
  //   }
  // };
  

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 bg-white p-4 rounded mt-4">
              <h2 className="text-center">Register</h2>
              <div className="mb-3">
                <label>
                  <b>Username</b>
                </label>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>
                  <b>Email</b>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>
                  <b>Phone Number</b>
                </label>
                <input
                  onChange={(e) => setPhno(e.target.value)}
                  type="tel"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>
                  <b>Date of Birth</b>
                </label>
                <input
                  onChange={(e) => setDob(e.target.value)}
                  type="date"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>
                  <b>Gender</b>
                </label>
                <select
                  onChange={(e) => setGender(e.target.value)}
                  className="form-control"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label>
                  <b>Password</b>
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>
                  <b>Confirm Password</b>
                </label>
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>
                  <b>Role</b>
                </label>
                <select
                  onChange={(e) => setRole(e.target.value)}
                  className="form-control"
                >
                  <option value="1">Learner</option>
                  <option value="2">Admin</option>
                </select>
              </div>
              <button onClick={onSignup} className="btn btn-success w-100 mt-3">
                Signup
              </button>
              <div className="text-center mt-2">
                <b>Already have an account?</b> <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default Register;
