import { useEffect, useState } from "react";
import { getQuestionsByCourseId } from "../../services/questionService";

function Question({ courseId }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!courseId) {
      setError("Invalid course ID.");
      setLoading(false);
      return;
    }
  
    async function loadQuestions() {
      setLoading(true);
      try {
        const data = await getQuestionsByCourseId(courseId);
        console.log("Fetched Questions in React:", data); // Debugging
        setQuestions(data);
      } catch (err) {
        setError("Failed to load questions");
      } finally {
        setLoading(false);
      }
    }
  
    loadQuestions();
  }, [courseId]);
  
  if (loading) return <p>Loading questions...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Questions for Course {courseId}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {questions.length > 0 ? (
          questions.map((question) => (
            <div key={question.id} className="shadow-md rounded-xl overflow-hidden">
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{question.question}</h2>
                <p className="text-gray-600 text-sm mb-4">{question.answer || "No answer available"}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No questions available.</p>
        )}
      </div>
    </div>
  );
}

export default Question;
