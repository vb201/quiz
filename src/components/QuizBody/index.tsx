import React, { useEffect, useState } from "react";
import Option from "../Option";

interface QuizBodyProps {
  Question: string;
  Options: string[];
  setCurrentAnswer: (answer: string) => void;
  computeScore: () => void;
  setCurrentQuestionAnswered: (answer: boolean) => void;
}

const QuizBody: React.FC<QuizBodyProps> = ({
  Question,
  Options,
  setCurrentAnswer,
  setCurrentQuestionAnswered,
  computeScore,
}: QuizBodyProps) => {
  const onAnswerSelect = (answer: string) => {
    setCurrentAnswer(answer);
    setCurrentQuestionAnswered(true);
  };

  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer: any;
    timer = setInterval(() => {
      setSeconds(seconds - 1);

      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    if (minutes === -1 && seconds === 59) {
      clearInterval(timer);
      alert("Time's up!");
      computeScore();
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      <div className="flex flex-col mb-auto">
        {/* Question */}
        <div className="flex justify-between items-center text-gray-400 text-3xl mt-2 mb-7 mr-2">
          <h1>{Question}</h1>
          <div className=" mx-3 pl-10 py-4">
            <p className="text-2xl text-red-400">
              {minutes < 10 ? "0" + minutes : minutes}:
              {seconds < 10 ? "0" + seconds : seconds}
            </p>
          </div>
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
    </>
  );
};

export default QuizBody;
