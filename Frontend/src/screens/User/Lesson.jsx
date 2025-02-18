import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Lesson = () => {
  const { courseId } = useParams(); // Get courseId from URL params
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!courseId) return; // Prevent fetch if no courseId

    axios
      .get(`http://localhost:8080/learner/lessons/${courseId}`)
      .then((response) => {
        setLessons(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching lessons:", error);
        setError("Failed to load lessons.");
        setLoading(false);
      });
  }, [courseId]);

  if (loading) return <p className="text-center mt-5">Loading lessons...</p>;
  if (error) return <p className="text-red-500 text-center mt-5">{error}</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Lessons for Course {courseId}</h1>

      {lessons.length === 0 ? (
        <p className="text-gray-600">No lessons available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lessons.map((lesson) => (
            <div key={lesson.id} className="shadow-md rounded-xl overflow-hidden p-4 bg-white">
              <h2 className="text-xl font-semibold mb-2">{lesson.lessonName}</h2>
              <a  href={lesson.sourceLink} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-blue-500 underline text-sm"
>
  Source Link
</a><br></br>

<a  href={lesson.videoLink} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-blue-500 underline text-sm"
>
  Video Link
</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Lesson;
