import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../services/Student";
import img from "../../images/User/logn.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLogin = async () => {
    if (email.length === 0) {
      toast.warn("Please enter email");
    } else if (password.length === 0) {
      toast.warn("Please enter password");
    } else {
      try {
        const result = await signin(email, password);
        if (result.status === "success") {
          toast.success("Welcome");

          // const { firstName, lastName, phone, token, role } = result.data;
          const { token, user } = result.data;
     const { firstName, lastName, phone, role } = user;

          // Cache user details in session storage
          sessionStorage.setItem("name", `${firstName} ${lastName}`);
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("phone", phone);
          sessionStorage.setItem("email", email);
          sessionStorage.setItem("role", role); // Store role in session storage

          // Navigate based on role
          if (role === 1) {
            navigate("/AdminDashboard"); // Admin
          } else if (role === 2) {
            navigate("/DiscussionPage"); // Student
          } else {
            toast.error("Unknown role. Please contact support.");
          }
        } else {
          toast.error(result.error || "Login failed");
        }
      } catch (error) {
        toast.error("An error occurred during login.");
      }
    }
  };
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // // get navigation hook
  // const navigate = useNavigate();

  // const onLogin = async () => {
  //   console.log("In the Onlogin function");
  
  //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  //   if (email.length === 0) {
  //     toast.error("Please enter your Email.");
  //     return;
  //   } else if (!emailRegex.test(email)) {
  //     toast.error("Invalid email format.");
  //     return;
  //   } else if (password.length === 0) {
  //     toast.error("Please enter your Password.");
  //     return;
  //   }
  
  //   try {
  //     const result = await signin(email, password);
  //     console.log("API Response:", result);
  
  //     if (!result || !result.user) {
  //       toast.error("Invalid response from server. Please try again.");
  //       return;
  //     }
  
  //     console.log("User Role:", result.user.role);
  
  //     if (result.user.role === "Learner") {
  //       toast.success("Login Successfully.");
  //       sessionStorage.setItem("name", `${result.user.firstName} ${result.user.lastName}`);
  //       sessionStorage.setItem("token", result.token);
  //       sessionStorage.setItem("phone", result.user.mobileNo);
  //       sessionStorage.setItem("email", email);
  //       navigate("/Home");
  //     } else if (result.user.role === "Admin") {
  //       toast.success("Admin Login Successfully.");
  //       sessionStorage.setItem("name", `${result.user.firstName} ${result.user.lastName}`);
  //       sessionStorage.setItem("token", result.token);
  //       sessionStorage.setItem("phone", result.user.mobileNo);
  //       sessionStorage.setItem("email", email);
  //       navigate("/AdminHome");
  //     } else {
  //       toast.error("User details not valid.");
  //     }
  //   } catch (error) {
  //     console.error("Login error:", error);
  //     toast.error("Login failed. Please check your credentials and try again.");
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
      <div>
        <div className="row">
          <div className="col"></div>
          <div
            className="col"
            style={{
              backgroundColor: "white",
              height: "500px",
              marginTop: "70px",
            }}
          >
            <div className="flex justify-center mt-4">
              <span className="bg-yellow-100 text-yellow-800 text-lg font-medium me-2 px-10.5 py-7.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">
                Login
              </span>
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
                <b>Password</b>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
              />
            </div>
        
            <div className="mt-3">
              <div>
                <b> Don't have an account? </b>
                <a
                  href="/register"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Register here!
                </a>
              </div>
              <button onClick={onLogin} className="btn btn-success mt-3">
                <Link to="/userDashboard"> </Link>
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
