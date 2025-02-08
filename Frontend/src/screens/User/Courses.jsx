// import React, { useState } from "react";
// import UserDashboard from "./UserDashboard";
// import img from "../../images/User/html.png";
// function Courses() {
//   const [cart, setCart] = useState([]);

//   const courses = [
//     {
//       id: 1,
//       title: "MS.NET",
//       image: "../../images/User/back.jpg",
//       price: 49.99,
//     },
//     {
//       id: 2,
//       title: "HTML Complete Course",
//       image: "../../images/User/html.png",
//       price: 49.99,
//     },
//     {
//       id: 3,
//       title: "SQL Beginner Course",
//       image: "/image/Mysql.jpg",
//       price: 49.99,
//     },
//     {
//       id: 4,
//       title: "JavaScript Beginner Course",
//       image: "/image/js.png",
//       price: 49.99,
//     },
//     { id: 5, title: "Java EE", image: "/image/java ee.png", price: 49.99 },
//     { id: 6, title: "Operating System", image: "/image/os.jpg", price: 49.99 },
//     {
//       id: 7,
//       title: "Python Master Course",
//       image: "/image/python.png",
//       price: 49.99,
//     },
//     { id: 8, title: "Java Essentials", image: "/image/java.png", price: 49.99 },
//     {
//       id: 9,
//       title: "CSS Complete Course",
//       image: "/image/css.png",
//       price: 49.99,
//     },
//   ];

//   function addToCart(course) {
//     if (!cart.find((item) => item.id === course.id)) {
//       setCart([...cart, course]);
//     }
//   }

//   function removeFromCart(courseId) {
//     setCart(cart.filter((item) => item.id !== courseId));
//   }

//   return (
//     <div>
//       <UserDashboard />

//       <div className="container">
//         <div className="text-center my-4">
//           <h2>
//             <b>Courses</b>
//           </h2>
//         </div>

//         <div className="row">
//           {courses.map((course) => (
//             <div key={course.id} className="col-md-4 mb-4">
//               <div className="card p-3 text-center shadow-sm">
//                 <img
//                   src="../../images/User/html.png"
//                   alt={course.title}
//                   height="100px"
//                 />
//                 <h6 className="mt-2">{course.title}</h6>
//                 <div className="cost">${course.price.toFixed(2)}</div>
//                 <button
//                   className="mt-3 btn btn-success"
//                   onClick={() => addToCart(course)}
//                 > 
//                   Add Course
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {cart.length > 0 && (
//           <div className="cart mt-4 p-3 border rounded shadow">
//             <h4>🛒 Your Cart</h4>
//             <ul className="list-group">
//               {cart.map((item) => (
//                 <li
//                   key={item.id}
//                   className="list-group-item d-flex justify-content-between align-items-center"
//                 >
//                   {item.title} - ${item.price.toFixed(2)}
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     Remove
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Courses;
