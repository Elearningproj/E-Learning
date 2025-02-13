// import axios from 'axios'
// import { createUrl } from '../utils'

// export async function signup(firstName, lastName, email, password, phone) {
//   try {
//     const body = {
//       firstName,
//       lastName,
//       email,
//       password,
//       phone,
//     }

//     const url = 'https://localhost:7013/api/Users';
//     ;

//     const response = await axios.post(url, body)
//     return response.data
//   } catch (ex) {
//     return { status: 'error', error: ex }
//   }
// }

// export async function signin(email, password) {
//   try {
//     const body = { email, password }
//     const url = createUrl('customer/signin')
//     const response = await axios.post(url, body)
//     return response.data
//   } catch (ex) {
//     return { status: 'error', error: ex }
//   }
// }

import axios from 'axios';

export async function signup(userData) {
  try {
    const url = "https://localhost:7013/api/Users"; // Ensure this is the correct endpoint
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
    const url = "https://localhost:7013/api/Login"; // Ensure this is the correct endpoint
    const response = await axios.post(url, body);

    // Check if the response is successful
    if (response.status === 200) {
      return { status: "success", data: response.data };
    } else {
      return { status: "error", error: response.data.message || "Login failed" };
    }
  } catch (ex) {
    // Handle network errors or server errors
    return { status: "error", error: ex.response?.data?.message || ex.message || "An error occurred during login" };
  }
}
