
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/learner/question";


export async function getQuestionsByCourseId(courseId) {
  try {
    console.log("Fetching questions for courseId:", courseId); // Debugging
    const response = await axios.get(`http://localhost:8080/learner/question/${courseId}`);
    console.log("API Response:", response.data); // Debugging
    return response.data || []; // Ensure React receives an array
  } catch (error) {
    console.error("Error fetching questions:", error);
    return []; // Prevent frontend crash
  }
}


