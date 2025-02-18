// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Cart from './Question';
// import {fetchCartItems } from "../../services/cart"; // ✅ Ensure correct import


// const Courses = () => {
//     const [courses, setCourses] = useState([]);
//     const [cart, setCart] = useState([]);
  
//     useEffect(() => {
//       const token = localStorage.getItem("token"); // Retrieve JWT token from localStorage
  
//       axios
//         .get("http://localhost:8080/learner/courses", {
//           headers: { Authorization: `Bearer ${token}` }, // Attach JWT token
//         })
//         .then((response) => setCourses(response.data))
//         .catch((error) => console.error("Error fetching courses:", error));

//         const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
//         setCart(savedCart);
//     }, []);
    
//     const addToCart = async (course) => {
//       const token = localStorage.getItem("token");
//       const userId = 1; // Replace with actual user ID from authentication
    
//       try {
//         await axios.post(`http://localhost:8080/learner/cart/${userId}/${course.id}`, {}, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
    
//         alert(`${course.courseName} added to cart!`);
//         fetchCartItems(); // Refresh cart after adding
//       } catch (error) {
//         console.error("Error adding course to cart:", error);
//         alert("Failed to add course to cart.");
//       }
//     };
  

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Available Courses</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {courses.map((course) => (
//           <div key={course.id} className="shadow-md rounded-xl overflow-hidden">
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{course.courseName}</h2>
//               <p className="text-gray-600 text-sm mb-4">{course.description}</p>
//               <button
//               onClick={() => addToCart(course)}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//             >
//               Add to Cart
//             </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Courses;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { fetchCartItems } from "../../services/cart"; 

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  useEffect(() => {
    const token = localStorage.getItem("token"); 
    axios
      .get("http://localhost:8080/learner/courses", {
        headers: { Authorization: `Bearer ${token}` }, 
      })
      .then((response) => setCourses(response.data))
      .catch((error) => console.error("Error fetching courses:", error));

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);
  
  const addToCart = async (course) => {
    const token = localStorage.getItem("token");
    const userId = 1; // Replace with actual user ID
    
    try {
      await axios.post(`http://localhost:8080/learner/cart/${userId}/${course.id}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert(`${course.courseName} added to cart!`);
      fetchCartItems();
      
      navigate("/Cart"); // ✅ Redirect to Cart page after adding
    } catch (error) {
      console.error("Error adding course to cart:", error);
      alert("Failed to add course to cart.");
    }
  };

  return (
    <div>
    <h1 className="text-2xl font-bold">📚 Courses</h1>
    <p>Here are your available courses...</p>

    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="shadow-md rounded-xl overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{course.courseName}</h2>
              <p className="text-gray-600 text-sm mb-4">{course.description}</p>
              <button
                onClick={() => addToCart(course)}
               
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                   >
                Add to Cart
                <a href="/Cart"/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Courses;

