import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import QuizBody from "../components/QuizBody";

import QuestionBankJSON from "../data/questions.json";

const QuizPage = () => {
  // const Questions = [];
  const questions = QuestionBankJSON.questions;
  const { totalQuestions } = QuestionBankJSON;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Create an array of answers
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    new Array(totalQuestions).fill("")
  );

  // Create an array of answers
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [currentQuestionAnswered, setCurrentQuestionAnswered] = useState(false);

  if (currentQuestionAnswered) {
    // Change Question and save answer to array of answers
    setCurrentQuestionAnswered(false);

    // Save answer to array of answers
    selectedAnswers[currentQuestionIndex] = currentAnswer;
    setSelectedAnswers(selectedAnswers);

    // Check if there are more questions
    if (currentQuestionIndex + 1 < totalQuestions) {
      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentQuestion(questions[currentQuestionIndex + 1]);
    } else {
      // End of quiz
      // TODO: Send answers to backend and after Redirect to results page
      // Compute score
      computeScore();
    }
  }

  function computeScore() {
    let score = 0;
    questions.forEach((question, index) => {
      if (question.answer === selectedAnswers[index]) {
        score++;
      }
    });
    alert(`Your score is ${score} out of ${totalQuestions}!`);
  }

  // Add a timer to the quiz when the timer is up, the quiz ends and the score is computed

  return (
    <>
      <div className="flex flex-col h-screen justify-between mx-3 pl-10 py-4">
        <Header />
        <QuizBody
          Question={currentQuestion.title}
          Options={currentQuestion.options}
          setCurrentAnswer={setCurrentAnswer}
          totalQuestions={totalQuestions}
          setCurrentQuestionAnswered={setCurrentQuestionAnswered}
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
