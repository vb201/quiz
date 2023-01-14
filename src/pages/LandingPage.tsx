import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center ">
        <p className="text-4xl font-semibold text-gray-800 p-1">Awesome Quiz</p>
        <p className="text-gray-600">
          A quiz app made with React and TypeScript
        </p>
        <p className="text-gray-500">option 1 is always the correct answer</p>
      </div>
      <div className="flex flex-col items-center justify-center p-5">
        <Link to="/start-quiz">
          <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
