import logo from './logo.svg';
import './QuizApp.css';

import React, { useState } from 'react';

const questionsData = [
  {
    question: 'Hva er hovedstaden i Python-programmeringsspråket?',
    options: ['Pyville', 'Java', 'C++', 'Ingen av dem'],
    correctAnswer: 'None of the above',
  },
  {
    question: 'Hva står HTML for?',
    options: ['HyperText Markup Language', 'High-Level Text Management Language', 'Hyper Transfer Mode Language', 'Home Tool Markup Language'],
    correctAnswer: 'HyperText Markup Language',
  },
  {
    question: 'Hva er et API?',
    options: ['Application Programming Interface', 'Advanced Programming Interface', 'Automated Processing Interface', 'All Purpose Interface'],
    correctAnswer: 'Application Programming Interface',
  },
  {
    question: 'Hvilket selskap utviklet JavaScript?',
    options: ['Microsoft', 'Google', 'Netscape', 'Oracle'],
    correctAnswer: 'Netscape',
  },
  {
    question: 'Hva er et GIT-repository?',
    options: ['En server for e-post', 'En lagringsplass for kildekode', 'En database for grafiske filer', 'En plattform for videoredigering'],
    correctAnswer: 'En lagringsplass for kildekode',
  },
  // Legg til flere spørsmål etter behov
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questionsData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questionsData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
       <div className="quiz-content">
          {showScore ? (
            <div className="score-section">
          <h2>Din score er {score} av {questionsData.length}</h2>
          <button onClick={restartQuiz}>Start på nytt</button>
          </div>
      ) : (
        <div className="question-section">
          <h2>Spørsmål {currentQuestion + 1}</h2>
          <p>{questionsData[currentQuestion].question}</p>
          <div className="answer-options">
            {questionsData[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default QuizApp;


