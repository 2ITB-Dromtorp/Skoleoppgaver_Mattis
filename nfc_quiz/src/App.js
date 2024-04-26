import logo from './logo.svg';
import './QuizApp.css';
import Confetti from 'react-confetti-explosion';
import React, { useEffect, useState } from 'react';

// Funksjon for å blande elementene i en array tilfeldig
const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// QuizApp-komponenten
const QuizApp = ({ setActive }) => {
  // Tilstand for å lagre spørsmålene
  const [questionsData, setQuestionData] = useState();
  // Tilstand for gjeldende spørsmålnummer
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // Tilstand for å lagre poengsummen
  const [score, setScore] = useState(0);
  // Tilstand for å vise eller skjule resultatseksjonen
  const [showScore, setShowScore] = useState(false);
  // Tilstand for å lagre svarene for hvert spørsmål
  const [curAnswers, setCurAnswers] = useState([]);
  // Tilstand for å lagre starttidspunktet for quizen
  const [startTime, setStartTime] = useState(Date.now());
  // Tilstand for å lagre tiden som har gått siden quizen startet
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Effekt for å hente spørsmålene fra serveren ved lasting av komponenten
  useEffect(() => {
    fetch('/questions')
      .then((res) => res.json())
      .then((data) => {
        setQuestionData(data);
      })
  }, []);

  // Effekt for å blande svaralternativene hver gang det gjeldende spørsmålet endres
  useEffect(() => {
    if (!questionsData) return;
    const q = questionsData[currentQuestion];
    setQuestionData((prev) => {
      return prev.map((question) => {
        if (question.question === q.question) {
          return {
            ...question,
            options: shuffle(q.options),
          };
        }
        return question;
      })
    })
  }, [currentQuestion]);

  // Effekt for å oppdatere tiden som har gått siden quizen startet
  useEffect(() => {
    if (!questionsData) return;
    if (showScore) {
      return;
    }
    const timeout = setTimeout(() => {
      setTimeElapsed(Date.now() - startTime);
    }, 1000);
    return () => {
      setTimeElapsed(Date.now() - startTime);
      clearTimeout(timeout)
    };
  });

  // Håndterer klikk på svaralternativet
  const handleAnswerClick = (selectedAnswer) => {
    // Øker poengsummen hvis svaret er korrekt
    if (selectedAnswer === questionsData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    // Legger til det valgte svaret i listen over svar
    setCurAnswers((c) => [...c, selectedAnswer]);

    // Beregner neste spørsmålnummer
    const nextQuestion = currentQuestion + 1;

    // Oppdaterer gjeldende spørsmålnummer eller viser resultatseksjonen
    if (nextQuestion < questionsData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  // Håndterer omstart av quizen
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setStartTime(Date.now());
    setActive(false);
  };

  // Beregner progresjonen til quizen
  const progress = questionsData ? ((currentQuestion + 1) / questionsData.length) * 100 : 0;

  const getFancyTime = (t) => {
    //X min X sek
    const min = Math.floor(t / 1000 / 60);
    const sec = Math.floor(t / 1000 % 60);
    return `${min} min ${sec} sek`;
  }

  // Returnerer JSX for QuizApp
  return (
    <>
      {questionsData ? (<>
        <p>Tid brukt: {getFancyTime(timeElapsed)}</p>
        <div className="quiz-content">
          {showScore ? (
            // Viser resultatseksjonen hvis showScore er true
            <div className="score-section">
              {score === questionsData.length ? <Confetti force={2} width={window.innerWidth} height={window.innerHeight} /> : null}
              <h2>Din score er {score} av {questionsData.length}</h2>
              <button className="startbut" onClick={restartQuiz}>Start på nytt</button>
              <div className="questions_results">
                {questionsData.map((question, index) => (
                  <div className='questions_result' key={index}>
                    <div className='questions_result_question'>{question.question}</div>
                    <div>{question.correctAnswer}</div>
                    <div style={{ color: question.correctAnswer === curAnswers[index] ? 'rgb(0, 200, 0)' : 'red' }}>{curAnswers[index]}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Viser spørsmålsseksjonen hvis showScore er false
            <div className="question-section">
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              </div>
              <h2>Spørsmål {currentQuestion + 1}</h2>
              <p>{questionsData[currentQuestion].question}</p>
              <div className="answer-options">
                {/* Mapper gjennom svaralternativene og oppretter knapper for hvert alternativ */}
                {questionsData[currentQuestion].options.map((option, index) => (
                  <button className='startbut' key={index} onClick={() => handleAnswerClick(option)}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </>) : (<>
      <div>
        Laster inn...
        </div>
        </>)}
    </>
  );
};

// App-komponenten som håndterer start og avslutning av quizen
export default function App() {
  const [quizActive, setQuizActive] = useState(false);
  return (
    <div className="quiz-container">
      <h1>Quiz om IT</h1>
      {quizActive ? <QuizApp setActive={setQuizActive} /> : <button className='startbut' onClick={() => setQuizActive(true)}>Start quiz</button>}
    </div>
  );
}
