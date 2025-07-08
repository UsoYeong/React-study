// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import quizData from './data/quizData';
import QuizCard from './components/QuizCard';
import AnswerScreen from './components/AnswerScreen';
import AnswerExplain from './components/AnswerExplain';
import HelpScreen from './components/HelpScreen';

function QuizFlow() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState('');
  const navigate = useNavigate();

  const currentQuiz = quizData[step];

  const handleAnswer = (option) => {
    setSelected(option);
    navigate('/answer');
  };

  const handleNext = () => {
    const isLast = step === quizData.length - 1;
    if (isLast) {
      alert('퀴즈가 모두 끝났습니다!');
      setStep(0);
      setSelected('');
      navigate('/quiz');
    } else {
      setStep(step + 1);
      setSelected('');
      navigate('/quiz');
    }
  };

  const handleHome = () => {
    setStep(0);
    setSelected('');
    navigate('/quiz');
  };

  return (
    <Routes>
      <Route
        path="/quiz"
        element={
          <QuizCard
            quiz={currentQuiz}
            onAnswer={handleAnswer}
          />
        }
      />
      <Route
        path="/answer"
        element={
          <AnswerScreen
            quiz={currentQuiz}
            selected={selected}
            onNext={handleNext}
            onHome={handleHome}
            onExplain={() => navigate('/explain')}
          />
        }
      />
      <Route
        path="/explain"
        element={
          <AnswerExplain
            quiz={currentQuiz}
            onBack={() => navigate('/answer')}
          />
        }
      />
      <Route
        path="/help"
        element={
          <HelpScreen
            quiz={currentQuiz}
            onBack={() => navigate('/quiz')} // ✅ 여기가 핵심!
          />
        }
      />
      <Route path="*" element={<Navigate to="/quiz" replace />} />
    </Routes>
  );
}

export default QuizFlow;
