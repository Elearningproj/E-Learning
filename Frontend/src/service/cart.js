import axios from "axios";

const API_URL = "http://localhost:8080/learner/cart";

export const getCartItems = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}`);
  return response.data;
};

export const removeCourseFromCart = async (userId, courseId) => {
  await axios.delete(`${API_URL}/${userId}/${courseId}`);
};


export const addCourseToCart = async (courseId) => {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    console.error("User ID is missing. Cannot add course to cart.");
    return null;
  }

  try {
    const response = await axios.post(`http://localhost:8080/learner/cart/${userId}/${courseId}`);
    console.log("Course added to cart:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding course to cart:", error);
    return null;
  }
};




export const getPurchasedCourses = async (userId) => {
  const response = await axios.get(`/learner/cart/purchased/${userId}`);
  return response.data;
};

export async function fetchCartItems(userId) {
  const response = await fetch(`/api/cart/${userId}/courses`);
  if (!response.ok) {
    throw new Error("Failed to fetch cart items");
  }
  return response.json();
}




