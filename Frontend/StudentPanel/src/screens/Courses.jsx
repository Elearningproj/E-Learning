// import React from "react";

// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Search } from "lucide-react";


// const courses = [
//   {
//     id: 1,
//     title: "Introduction to Programming",
//     description: "Learn the basics of programming with this beginner-friendly course.",
//     // image: "/",
//   },
//   {
//     id: 2,
//     title: "Advanced JavaScript",
//     description: "Master the advanced concepts of JavaScript to become a pro developer.",
//     // image: "/image/js.png" ,
//   },
//   {
//     id: 3,
//     title: "Data Structures and Algorithms",
//     description: "Enhance your problem-solving skills with in-depth coverage of DSA.",
//     // image: "https://via.placeholder.com/150",
//   },
//   {
//     id: 4,
//     title: "HTML Complete Course",
//     description: "HTML (HyperText Markup Language) is the standard language used to structure content on the web..",
//     // image: "/image/js.png" ,
//   },
//   {
//     id: 5,
//     title: "Python Master Course",
//     description: "Python is a versatile, high-level programming language known for its readability and wide applications in web development.",
//     // image: "https://via.placeholder.com/150",
//   },
//   {
//     id: 6,
//     title: "SQL Beginner Course",
//     description: "Database engineers create relationships between multiple database tables to optimize data storage space..",
//     // image: "/image/js.png" ,
//   },
//   {
//     id: 7,
//     title: "React",
//     description: "Learn the fundamentals of React and build interactive web apps.",
//     // image: "https://via.placeholder.com/150",
//   },
// ];

// export default function Courses() {
//   return (
//     <div className="p-6">
//       <div className="mb-6 flex items-center justify-between">
//         <h1 className="text-2xl font-bold" style={{marginLeft:"650px"}}>Courses</h1>
//         <div className="flex items-center gap-2">
//           <input type="text" placeholder="Search courses..." className="w-72" />
//           <button variant="outline"> Search
//           </button>
//         </div>
//       </div>

//       <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
//         {courses.map((course) => (
//           <div
//             key={course.id}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <div className="shadow-md">
//               <img src={course.image} alt={course.title} className="rounded-t-xl" />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold">{course.title}</h2>
//               </div>
//               <div className="p-4">
//                 <p className="text-gray-600">{course.description}</p>
//                 <button variant="primary" className="mt-4 w-full">
//                   Enroll Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

function Courses(){
     
    
    
    return(
<div >
   <div style={{height:"60px",backgroundColor:"#F5EFE7" }}>
   <h2 backgroundColor="#213555" style={{marginLeft:"650px"}}><b>Courses</b></h2>
   </div>
   <div className="row">
   <div className="col" style={{marginLeft:"100px", marginTop:"50px"}}>
              
              <div className="details">
                
                <h6>MS.NET</h6>
                <div className="star">
                <img src="/image/net.png" alt="" height={"100px"} width={"130px"}/>
                </div>
              </div>
              <div className="cost">$49.99</div>
              <button className='mt-3 btn btn-success'>
              Add Course
            </button>
            </div>
            <div className="col" style={{ marginTop:"50px"}}>
             
              <div className="details">
             
                <h6>HTML Complete Course</h6>
                <div className="star">
                <img src="/image/html.png" alt=""  height={"100px"} />
              
                </div>
              </div>
              <div className="cost">$49.99</div>
              <button className='mt-3 btn btn-success'>Add Course</button>
            </div>
          

            <div className="col" style={{ marginTop:"50px"}}>
             
              <div className="details">
               
                <h6>SQL Beginner Course</h6>
                <div className="star">
                <img src="/image/Mysql.jpg" alt=""   height={"100px"} width={"130px"}/>
                
                  </div>
              </div>
              <div className="cost">$49.99</div>
              <button className='mt-3 btn btn-success'> Add Course</button>
              </div>


   </div>
   <div className="row" style={{marginTop:"50px"}}>
          <div className="col" style={{marginLeft:"100px" }}>
             
              <div className="details">
                
                <h6>JavaScript Beginner Course</h6>
                <div className="star">
                <img src="/image/js.png" alt="" height={"100px"} />
                </div>
              </div>
              <div className="cost">$49.99</div>
              <button className='mt-3 btn btn-success'>Add Course</button>
            </div>
            <div className="col">
            
              <div className="details">
             
                <h6>Java EE</h6>
                <div className="star">
                <img src="/image/java ee.png" alt="" height={"100px"} />
               
                </div>
              </div>
              <div className="cost">$49.99</div>
              <button className='mt-3 btn btn-success'>Add Course</button>
            </div>
          

            <div className="col">
            
              <div className="details">
               
                <h6>Operating system</h6>
                <div className="star">
                <img src="/image/os.jpg" alt="" height={"100px"} />
               
                  </div>
              </div>
              <div className="cost">$49.99</div>
              <button className='mt-3 btn btn-success'>Add Course</button>
              </div>


            <div className="row" style={{marginTop:"50px"}}>
            </div>
            <div className="col" style={{marginLeft:"100px"}}>
             
              <div className="details">
             
                <h6>Python Master Course</h6>
                <div className="star">
                <img src="/image/python.png" alt=""  height={"100px"} />
               
                </div>
              </div>
              <div className="cost">$49.99</div>
              <button className='mt-3 btn btn-success'>Add Course</button>
            </div>
            <div className="col">
            
              <div className="details">
              
                <h6>Java Essentials</h6>
                <div className="star">
                <img src="/image/java.png" alt=""  height={"100px"} />
                
                </div>
              </div>
              <div className="cost">$49.99</div>
              <button className='mt-3 btn btn-success'> Add Course</button>
            </div>
            <div className="col">
             
              <div className="details">
                
                <h6>CSS Complete Course</h6>
                <div className="star">
                <img src="/image/css.png" alt=""  height={"100px"} />
               
                </div>
              </div>
              <div className="cost">$49.99</div>
              <button className='mt-3 btn btn-success'>Add Course</button>
            </div>
            </div>
</div>
    );
 }
 export default Courses ;