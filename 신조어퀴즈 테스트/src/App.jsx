import React, { useState } from 'react';
import quizData from './data/quizData';
import QuizCard from './components/QuizCard';
import AnswerScreen from './components/AnswerScreen';
import AnswerExplain from './components/AnswerExplain';

export default function App() {
  const [step, setStep] = useState(0);           // 현재 퀴즈 번호
  const [selected, setSelected] = useState('');  // 사용자가 선택한 보기
  const [screen, setScreen] = useState('quiz');  // quiz | answer | explain

  const currentQuiz = quizData[step];

  const handleAnswer = (option) => {
    setSelected(option);
    setScreen('answer');
  };

  const handleNext = () => {
    const isLast = step === quizData.length - 1;
    if (isLast) {
      alert('퀴즈가 모두 끝났습니다!');
      setStep(0);          // 다시 처음으로
      setScreen('quiz');
      setSelected('');
    } else {
      setStep(step + 1);   // 다음 문제로 이동
      setScreen('quiz');
      setSelected('');
    }
  };

  const handleHome = () => {
    setStep(0);
    setScreen('quiz');
    setSelected('');
  };

  const handleExplain = () => {
    setScreen('explain');
  };

  if (!currentQuiz) return <div>퀴즈 데이터 없음</div>;

  return (
    <>
      {screen === 'quiz' && (
        <QuizCard quiz={currentQuiz} onAnswer={handleAnswer} />
      )}
      {screen === 'answer' && (
        <AnswerScreen
          quiz={currentQuiz}
          selected={selected}
          onNext={handleNext}
          onHome={handleHome}
          onExplain={handleExplain}
        />
      )}
      {screen === 'explain' && (
        <AnswerExplain
          quiz={currentQuiz}
          onBack={() => setScreen('answer')}
        />
      )}
    </>
  );
}
