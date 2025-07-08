// src/components/HelpScreen.jsx
import React from 'react';
import './HelpScreen.css';

export default function HelpScreen({ quiz, onBack }) {
  return (
    <div className="help-container">
      <div className="help-card">
        <div className="help-title">도움말</div>

        <img src={quiz.image} alt="quiz-help" className="help-image" />

        <div className="section-title">의미</div>
        <div className="section-box">
          {quiz.meaning.split('\n').map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>

        <div className="section-title">예시</div>
        <div className="section-box">
          {quiz.example.replace(quiz.answer, '(     )')}
        </div>

        <button className="btn-back" onClick={onBack}>
          뒤로가기
        </button>
      </div>
    </div>
  );
}
