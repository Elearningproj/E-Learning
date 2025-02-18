import React, { useEffect, useState } from "react";
import { getPurchasedCourses } from "../../services/cart"; // ✅ Import API function

const MyCourses = ({ userId }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (!userId) return;
    fetchPurchasedCourses();
  }, [userId]);

  const fetchPurchasedCourses = async () => {
    try {
      const courses = await getPurchasedCourses(userId);
      setCourses(courses || []);
    } catch (error) {
      console.error("Error fetching purchased courses:", error.response?.data || error.message);
    }
  };

  if (!userId) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Courses</h2>
      {courses.length === 0 ? (
        <p>You haven't purchased any courses yet.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <li key={course.id} className="p-4 border rounded-lg shadow">
              <h3 className="text-lg font-semibold">{course.name}</h3>
              <p>{course.description}</p>
              <p className="text-green-600 font-bold">${course.price}</p>
              <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">
                Start Course
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyCourses;
