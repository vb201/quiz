import React from "react";
import Footer from "../Footer";
import Option from "../Option";

interface QuizBodyProps {
  Question: string;
  Options: string[];
  setCurrentAnswer: (answer: string) => void;
  totalQuestions: number;
  setCurrentQuestionAnswered: (answer: boolean) => void;
}

const QuizBody: React.FC<QuizBodyProps> = ({
  Question,
  Options,
  setCurrentAnswer,
  setCurrentQuestionAnswered,
  totalQuestions,
}: QuizBodyProps) => {
  const onAnswerSelect = (answer: string) => {
    setCurrentAnswer(answer);
    setCurrentQuestionAnswered(true);
  };
  return (
    <>
      {/* Container */}
      <div className="flex flex-col   mb-auto">
        {/* Question */}
        <div className="text-gray-400 text-3xl mt-2 mb-7">
          <h1>{Question}</h1>
        </div>

        {/* Answers */}
        {Options.map((title, index) => (
          <Option
            title={title}
            key={index}
            callback={() => onAnswerSelect(title)}
          />
        ))}
      </div>

      {/* <Footer currentQuestion={1} totalQuestions={totalQuestions} /> */}
    </>
  );
};

export default QuizBody;
