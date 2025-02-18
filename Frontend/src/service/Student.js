import axios from 'axios'
import { createUrl } from '../utils'
import { ToastContainer, toast } from "react-toastify";



// export const signup = async (userData) => {
//   try {
//     const response = await fetch("https://localhost:7172/api/Users/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     });

//     const result = await response.json();

//     if (!response.ok) {
//       console.error("Signup failed:", result);
//       if (result.errors) {
//         Object.values(result.errors).forEach((errMsg) => {
//           toast.error(errMsg);
//         });
//       } else {
//         toast.error("Signup failed. Please check your input.");
//       }
//       return;
//     }

//     toast.success("Signup successful!");
//   } catch (error) {
//     console.error("Network error:", error);
//     toast.error("Network error. Please try again.");
//   }
// };
export async function signup(userData) {
  try {
    const url = "https://localhost:7172/api/Users/register"; // Ensure this is the correct endpoint
    const response = await axios.post(url, userData);

    // Check if the response is successful
    if (response.status === 200 || response.status === 201) {
      return { status: "success", data: response.data };
    } else {
      return { status: "error", error: response.data.message || "Registration failed" };
    }
  } catch (ex) {
    // Handle network errors or server errors
    return { status: "error", error: ex.response?.data?.message || ex.message || "An error occurred during registration" };
  }
}

export async function signin(email, password) {
  try {
    const body = { email, password }; // Correctly construct the request body
    console.log(body);
    const url = "https://localhost:7172/api/Login"; // Ensure this is the correct endpoint
   // console.log(body);
    const response = await axios.post(url, body);
    console.log(response.data);

    // Check if the response is successful
    if (response.data.token) {
      console.log(response.data)
      return { status: "success", data: response.data };
    } else {
      return { status: "error", error: response.data.message || "Login failed" };
    }
  } catch (ex) {
    // Handle network errors or server errors
    return { status: "error", error: ex.response?.data?.message || ex.message || "An error occurred during login" };
  }
}


