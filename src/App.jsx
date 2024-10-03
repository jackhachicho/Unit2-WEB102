import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Card from './components/Card';

const cardData = [
  { language: 'Ruby', question: 'What is Ruby?', answer: 'Ruby is a dynamic, object-oriented programming language known for its simplicity and productivity.' },
  { language: 'Ruby', question: 'What is Ruby on Rails?', answer: 'Ruby on Rails is a web application framework written in Ruby that follows the MVC pattern.' },
  { language: 'Python', question: 'What is Python?', answer: 'Python is a high-level, interpreted programming language known for its readability and versatility.' },
  { language: 'Python', question: 'What are Python list comprehensions?', answer: 'List comprehensions are a concise way to create lists in Python, combining a for loop and a conditional statement.' },
  { language: 'JavaScript', question: 'What is JavaScript?', answer: 'JavaScript is a high-level, interpreted programming language primarily used for client-side web development.' },
  { language: 'JavaScript', question: 'What is the difference between let and var in JavaScript?', answer: "let has block scope, while var has function scope. let also doesn't allow redeclaration within the same scope." },
  { language: 'Node.js', question: 'What is Node.js?', answer: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, allowing you to run JavaScript on the server-side." },
  { language: 'Node.js', question: 'What is npm in Node.js?', answer: 'npm (Node Package Manager) is the default package manager for Node.js, used to install and manage project dependencies.' },
  { language: 'Go', question: 'What is Go?', answer: 'Go (or Golang) is a statically typed, compiled programming language designed by Google, known for its simplicity and efficiency.' },
  { language: 'Go', question: 'What are goroutines in Go?', answer: 'Goroutines are lightweight threads managed by the Go runtime, used for concurrent programming in Go.' },
];

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    setIsFlipped(false);  // Reset flip state when switching to the next card
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const currentCard = cardData[currentCardIndex];

  return (
    <div className="app">
      <h1>Computer Science FAQs Flashcards</h1>
      <h2>Test your knowledge of various programming languages!</h2>
      <p>Number of cards: {cardData.length}</p>
      <Card
        language={currentCard.language}
        question={currentCard.question}
        answer={currentCard.answer}
        isFlipped={isFlipped}
        onClick={handleCardClick}
      />
      <button className="next-button" onClick={handleNextCard}>
        <ArrowRight />
      </button>
    </div>
  );
}

export default App;
