import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Certificate = ({ studentName, courseName, date }) => {
  const certificateRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => certificateRef.current,
    documentTitle: `${studentName}_Certificate`,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div
        ref={certificateRef}
        className="bg-white border-4 border-blue-500 shadow-lg rounded-xl p-8 w-[600px] text-center"
      >
        <h1 className="text-4xl font-bold text-blue-600">Certificate of Completion</h1>
        <p className="text-lg text-gray-700 mt-4">This is proudly presented to</p>
        <h2 className="text-3xl font-semibold text-gray-900 mt-2">{studentName}</h2>
        <p className="text-lg text-gray-700 mt-4">For successfully completing the course</p>
        <h3 className="text-2xl font-semibold text-gray-900 mt-2">{courseName}</h3>
        <p className="text-md text-gray-600 mt-4">Date of Completion: {date}</p>
        <div className="mt-6 flex justify-between px-8">
          <div className="text-left">
            <p className="text-gray-700 font-semibold">Instructor</p>
            <div className="h-[2px] w-32 bg-gray-500 mt-2"></div>
          </div>
          <div className="text-right">
            <p className="text-gray-700 font-semibold">Signature</p>
            <div className="h-[2px] w-32 bg-gray-500 mt-2"></div>
          </div>
        </div>
      </div>
      
      <button
        onClick={handlePrint}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default Certificate;
