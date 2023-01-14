import React from "react";

interface FooterProps {
  currentQuestion: number;
  totalQuestions: number;
}
const Footer: React.FC<FooterProps> = ({ currentQuestion, totalQuestions }) => {
  return (
    <div className="flex flex-col justify-between static bottom-0 ">
      <div className="w-full h-1 bg-gray-200 mb-5"></div>
      <div className="text-gray-500 text-2xl">
        Question {currentQuestion}/{totalQuestions}
      </div>
    </div>
  );
};

export default Footer;
