import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import QuestionBankJSON from "./data/questions.json";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/start-quiz"
            element={<QuizPage QuestionBank={QuestionBankJSON} />}
          />
          <Route
            path="/result/:quizScore"
            element={
              <ResultPage totalQuestions={QuestionBankJSON.totalQuestions} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
