import React from 'react';
import './QuizCard.css';

export default function QuizCard({ quiz, onAnswer }) {
  const colors = ['pink', 'lightyellow', 'lightblue', 'lightgreen'];
  const optionLabels = ['가', '나', '다', '라']; // 보기 앞 글자 지정

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <div className="quiz-title">신조어 퀴즈</div>
        <div className="quiz-subtitle">그림이 설명하는 신조어는?</div>

        <img src={quiz.image} alt="quiz" className="quiz-image" />

        <div className="quiz-options">
          {quiz.options.map((option, idx) => (
            <button
              key={idx}
              className={`option-button ${colors[idx]}`}
              onClick={() => onAnswer(option)}
            >
              <span className="radio-circle" />
              <span className="option-text">
                {optionLabels[idx]}. {option}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
