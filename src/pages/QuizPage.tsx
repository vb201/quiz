import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import QuizBody from "../components/QuizBody";
import { useNavigate } from "react-router-dom";
interface QuizPageProps {
  QuestionBank: {
    questions: {
      title: string;
      options: string[];
      answer: string;
    }[];
    totalQuestions: number;
  };
}
const QuizPage: React.FC<QuizPageProps> = ({ QuestionBank }: QuizPageProps) => {
  const navigate = useNavigate();
  const questions = QuestionBank.questions;
  const { totalQuestions } = QuestionBank;

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    new Array(totalQuestions).fill("")
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [currentQuestionAnswered, setCurrentQuestionAnswered] = useState(false);

  if (currentQuestionAnswered) {
    setCurrentQuestionAnswered(false);

    // Save answer to array of answers
    selectedAnswers[currentQuestionIndex] = currentAnswer;
    setSelectedAnswers(selectedAnswers);

    if (currentQuestionIndex + 1 < totalQuestions) {
      moveToNextQuestion();
    } else {
      // End of quiz
      // TODO: Send answers to backend and after Redirect to results page
      // Compute score
      computeScore();
    }
  }

  function moveToNextQuestion() {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentQuestion(questions[currentQuestionIndex + 1]);
  }
  function computeScore() {
    let score = 0;
    questions.forEach((question, index) => {
      if (question.answer === selectedAnswers[index]) {
        score++;
      }
    });
    navigate(`/result/${score}`);
  }
  return (
    <>
      <div className="flex flex-col h-screen justify-between mx-3 pl-10 py-4">
        <Header />
        <QuizBody
          Question={currentQuestion.title}
          Options={currentQuestion.options}
          setCurrentAnswer={setCurrentAnswer}
          setCurrentQuestionAnswered={setCurrentQuestionAnswered}
          computeScore={computeScore}
        />
        <Footer
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
        />
      </div>
    </>
  );
};

export default QuizPage;
