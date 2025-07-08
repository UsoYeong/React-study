import React from 'react';
import './AnswerExplain.css';

export default function AnswerExplain({ quiz, onBack }) {
  const optionLabels = ['가', '나', '다', '라']; // 보기 라벨

  return (
    <div className="explain-container">
      <div className="explain-card">
        <h2 className="explain-title">해설</h2>

        {quiz.options.map((option, index) => (
          <div key={index} className="explain-item">
            <div className="explain-option">
              {optionLabels[index]}. {option}
            </div>
            <div className="explain-bubble">
              {quiz.explanations?.[index] || '해설 없음'}
            </div>
          </div>
        ))}

        <button className="btn-back" onClick={onBack}>돌아가기</button>
      </div>
    </div>
  );
}
