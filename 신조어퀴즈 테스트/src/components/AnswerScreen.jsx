import React from 'react';
import './AnswerScreen.css';

export default function AnswerScreen({ quiz, selected, onNext, onHome, onExplain }) {
  const isCorrect = selected === quiz.answer;

  return (
    <div className="answer-container">
      <div className="answer-card">
        
        {/* O 또는 X 아이콘 */}
        <div className={`ox-symbol ${isCorrect ? 'circle' : 'cross'}`}>
          {isCorrect ? 'O' : 'X'}
        </div>

        <div className="result-text">
          {isCorrect ? '정답입니다' : '오답입니다'}
        </div>

        {/* 퀴즈 이미지 */}
        <img src={quiz.image} alt="quiz" className="quiz-image" />

        <div className="answer-text">{quiz.answer}</div>

        <div className="section-title">의미</div>
        <div className="section-box">
          {quiz.meaning.split('\n').map((line, i) => <div key={i}>{line}</div>)}
        </div>

        <div className="section-title">예시</div>
        <div className="section-box">
          {quiz.example.split('\n').map((line, i) => <div key={i}>{line}</div>)}
        </div>

        <div className="button-group">
          <button className="btn home" onClick={onHome}>홈</button>
          <button className="btn next" onClick={onNext}>다음</button>
          <button className="btn explain" onClick={onExplain}>해설</button>
        </div>
      </div>
    </div>
  );
}
