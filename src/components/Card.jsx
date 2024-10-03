import React from 'react';

const Card = ({ language, question, answer, isFlipped, onClick }) => {
  return (
    <div className="flip-card" onClick={onClick}>
      <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="flip-card-front">
          <h3>{question}</h3>
        </div>
        <div className="flip-card-back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
