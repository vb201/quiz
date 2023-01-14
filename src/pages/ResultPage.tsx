import React from "react";
import { Link, useParams } from "react-router-dom";
interface ResultPageProps {
  totalQuestions: number;
}

const ResultPage: React.FC<ResultPageProps> = ({
  totalQuestions,
}: ResultPageProps) => {
  const { quizScore } = useParams();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center p-10">
        <p className="text-4xl font-semibold text-gray-800 p-1">Awesome Quiz</p>
        <p className="text-4xl font-semibold text-gray-800 p-1">
          Your Score {quizScore} is out of {totalQuestions}
        </p>
      </div>
      <Link to="/">
        <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default ResultPage;
