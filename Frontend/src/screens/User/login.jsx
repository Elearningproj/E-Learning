import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../services/Student";
import img from "../../images/User/logn.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");

  const navigate = useNavigate();

  const onLogin = async () => {
    if (email.length === 0) {
      toast.warn("Please enter email");
    } else if (password.length === 0) {
      toast.warn("Please enter password");
    } else {
      try {
        const result = await signin({ email, password});
        console.log(result)
        if (result.status === "success") {
          toast.success("Welcome");

          const { firstName, lastName, phone, token } = result.data;

          // Cache user details in session storage
          sessionStorage.setItem("name", `${firstName} ${lastName}`);
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("phone", phone);
          sessionStorage.setItem("email", email);

          navigate("/userDashboard");
        } else {
          toast.error(result.error || "Login failed");
        }
      } catch (error) {
        toast.error("An error occurred during login.");
      }
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div
        style={{
          // backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <div>
          <div className="row">
            <div className="col"></div>
            <div
              className="col"
              style={{ backgroundColor: "white", height: "500px", marginTop: "70px" }}
            >
              <div className="flex justify-center mt-4">
                <span className="bg-yellow-100 text-yellow-800 text-lg font-medium px-10 py-7 rounded-sm">
                  Login
                </span>
              </div>
              <div className="mb-3">
                <label htmlFor="email">
                  <b>Email</b>
                </label>
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">
                  <b>Password</b>
                </label>
                <input
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                />
              </div>
              {/* <div className="mb-3">
                <label htmlFor="role">
                  <b>Role</b>
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-control"
                >
                  <option value="Admin">Admin</option>
                  <option value="Student">Student</option>
                </select>
              </div> */}
              <div className="mt-3">
                <div>
                  <b> Don't have an account? </b>
                  <Link to="/register" className="font-medium text-blue-600 hover:underline">
                    Register here!
                  </Link>
                </div>
                <button onClick={onLogin} className="btn btn-success mt-3">
                  Login
                </button>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
