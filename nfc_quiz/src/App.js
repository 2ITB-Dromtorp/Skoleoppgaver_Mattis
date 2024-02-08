import logo from './logo.svg';
import './QuizApp.css';
import Confetti from 'react-confetti-explosion';


import React, { useEffect, useState } from 'react';

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// QuizApp-komponenten
const QuizApp = ({ setActive }) => {
  const [questionsData, setQuestionData] = useState([
    {
      question: 'Hva er hovedstaden i Python-programmeringsspråket?',
      options: ['Pyville', 'Java', 'C++', 'Ingen av dem'],
      correctAnswer: 'Ingen av dem'
    },
    {
      question: 'Hva er en loop i programmering?',
      options: ['En type variabel', 'En type algoritme', 'En gjentakende kontrollstruktur', 'En type funksjon'],
      correctAnswer: 'En gjentakende kontrollstruktur'
    },
    {
      question: 'Hva er et array i programmering?',
      options: ['En type variabel', 'En samling av ulike dataelementer', 'En type algoritme', 'En form for løkke'],
      correctAnswer: 'En samling av ulike dataelementer'
    },
    {
      question: 'Hva er en metode i objektorientert programmering?',
      options: ['En klasse', 'En variabel', 'En funksjon som tilhører en klasse', 'En type array'],
      correctAnswer: 'En funksjon som tilhører en klasse'
    },
    {
      question: 'Hva er rekursjon i programmering?',
      options: ['En type løkke', 'En type variabel', 'En teknikk der en funksjon kaller seg selv', 'En type algoritme'],
      correctAnswer: 'En teknikk der en funksjon kaller seg selv'
    },
    {
      question: 'Hva er et objekt i objektorientert programmering?',
      options: ['En funksjon', 'En klasse', 'En samling av data og tilhørende metoder', 'En type variabel'],
      correctAnswer: 'En samling av data og tilhørende metoder'
    },
    {
      question: 'Hva er en algoritme?',
      options: ['En type variabel', 'En sekvens av instruksjoner for å løse et problem', 'En type funksjon', 'En form for løkke'],
      correctAnswer: 'En sekvens av instruksjoner for å løse et problem'
    },
    {
      question: 'Hva er en variabel i programmering?',
      options: ['En konstant', 'En form for løkke', 'En container for å lagre data', 'En type algoritme'],
      correctAnswer: 'En container for å lagre data'
    },
    {
      question: 'Hva betyr "DRY" i programmering?',
      options: ['Do Repeat Yourself', 'Don\'t Repeat Yourself', 'Do Read Yourself', 'Don\'t Read Yourself'],
      correctAnswer: 'Don\'t Repeat Yourself'
    },
    {
      question: 'Hva er en datatype i programmering?',
      options: ['En algoritme', 'En type variabel', 'En type løkke', 'En type funksjon'],
      correctAnswer: 'En type variabel'
    },
    {
      question: 'Hva er en funksjon i programmering?',
      options: ['En klasse', 'En type algoritme', 'En blokk med kode som utfører en spesifikk oppgave', 'En type variabel'],
      correctAnswer: 'En blokk med kode som utfører en spesifikk oppgave'
    },
    {
      question: 'Hva er et nøkkelord i programmering?',
      options: ['En type variabel', 'Et reservert ord som har en spesifikk betydning i koden', 'En type algoritme', 'En type løkke'],
      correctAnswer: 'Et reservert ord som har en spesifikk betydning i koden'
    },
    {
      question: 'Hva er en kommentar i programmering?',
      options: ['En del av koden som ikke blir utført', 'En forklaring i koden som ikke blir tolket av datamaskinen', 'En type variabel', 'En type algoritme'],
      correctAnswer: 'En forklaring i koden som ikke blir tolket av datamaskinen'
    },
    {
      question: 'Hva er en betinget uttalelse i programmering?',
      options: ['En type variabel', 'En type algoritme', 'En type løkke', 'En beslutningsstruktur som utfører ulike handlinger basert på en betingelse'],
      correctAnswer: 'En beslutningsstruktur som utfører ulike handlinger basert på en betingelse'
    },
    {
      question: 'Hva er en streng i programmering?',
      options: ['En type variabel', 'En type algoritme', 'En type løkke', 'En sekvens av tegn, for eksempel tekst'],
      correctAnswer: 'En sekvens av tegn, for eksempel tekst'
    },
    {
      question: 'Hva er "debugging" i programmering?',
      options: ['Feilsøking og retting av feil i kode', 'En type variabel', 'En type algoritme', 'En type løkke'],
      correctAnswer: 'Feilsøking og retting av feil i kode'
    },
    {
      question: 'Hva betyr "syntax" i programmering?',
      options: ['Riktig ordstilling og grammatikk i koden', 'Feil i koden som hindrer tolkning', 'En type variabel', 'En type algoritme'],
      correctAnswer: 'Riktig ordstilling og grammatikk i koden'
    },
    {
      question: 'Hva er "camelCase" i programmering?',
      options: ['En type variabel', 'En konvensjon for å navngi variabler eller funksjoner hvor hvert ord starter med en stor bokstav, unntatt det første ordet', 'En type algoritme', 'En type løkke'],
      correctAnswer: 'En konvensjon for å navngi variabler eller funksjoner hvor hvert ord starter med en stor bokstav, unntatt det første ordet'
    },
    {
      question: 'Hva er et objekt i JavaScript?',
      options: ['En datastruktur som lagrer ulike typer data', 'En type variabel', 'En type algoritme', 'En type løkke'],
      correctAnswer: 'En datastruktur som lagrer ulike typer data'
    },
    {
      question: 'Hva er en "for loop" i programmering?',
      options: ['En type variabel', 'En løkke som gjentar en blokk med kode et gitt antall ganger', 'En type algoritme', 'En type funksjon'],
      correctAnswer: 'En løkke som gjentar en blokk med kode et gitt antall ganger'
    },
    {
      question: 'Hva er "boolean" i programmering?',
      options: ['En type variabel som kan lagre sanne eller usanne verdier', 'En type algoritme', 'En type'],
      correctAnswer: 'En type variabel som kan lagre sanne eller usanne verdier'
    },
    {
      question: 'Hva står HTML for?',
      options: ['HyperText Markup Language', 'High-Level Text Management Language', 'Hyper Transfer Mode Language', 'Home Tool Markup Language'],
      correctAnswer: 'HyperText Markup Language'
    },
    {
      question: 'Hva er et API?',
      options: ['Application Programming Interface', 'Advanced Programming Interface', 'Automated Processing Interface', 'All Purpose Interface'],
      correctAnswer: 'Application Programming Interface'
    },
    {
      question: 'Hva er navnet på det mest brukte versjonskontrollsystemet for programvareutvikling?',
      options: ['Git', 'SVN', 'Mercurial', 'Perforce'],
      correctAnswer: 'Git'
    },
    {
      question: 'Hvilket av følgende språk er et objektorientert programmeringsspråk?',
      options: ['Python', 'C', 'Assembly', 'Bash'],
      correctAnswer: 'Python'
    },
    {
      question: 'Hva er den grunnleggende enheten for informasjonslagring i datamaskiner?',
      options: ['Byte', 'Nibble', 'Bit', 'Word'],
      correctAnswer: 'Bit'
    },
    {
      question: 'Hvilket av følgende operativsystemer er basert på Linux-kjernen?',
      options: ['Windows', 'macOS', 'Ubuntu', 'FreeBSD'],
      correctAnswer: 'Ubuntu'
    },
    {
      question: 'Hva er den vanligste typen feil i programmering som oppstår når en instruksjon forsøker å operere på ugyldig data?',
      options: ['Syntaxfeil', 'Logisk feil', 'Kjøretidsfeil', 'Kompilasjonsfeil'],
      correctAnswer: 'Kjøretidsfeil'
    },
    {
      question: 'Hvilket selskap utviklet JavaScript?',
      options: ['Microsoft', 'Google', 'Netscape', 'Oracle'],
      correctAnswer: 'Netscape'
    },
    {
      question: 'Hva er et GIT-repository?',
      options: ['En server for e-post', 'En lagringsplass for kildekode', 'En database for grafiske filer', 'En plattform for videoredigering'],
      correctAnswer: 'En lagringsplass for kildekode'
    }

    // Legg til flere spørsmål
  ]);
  // for gjeldende spørsmålnummer
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // for å lagre poengsummen
  const [score, setScore] = useState(0);
  // for å vise eller skjule resultatseksjonen
  const [showScore, setShowScore] = useState(false);
  const [curAnswers, setCurAnswers] = useState([]);

  const [startTime, setStartTime] = useState(Date.now());
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
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

  useEffect(() => {
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
  })

  // Håndterer klikk på svaralternativet
  const handleAnswerClick = (selectedAnswer) => {
    // Øker poengsummen hvis svaret er korrekt
    if (selectedAnswer === questionsData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
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

  const progress = ((currentQuestion + 1) / questionsData.length) * 100

  // Returnerer JSX for QuizApp
  return (
    <>
      <p>Time elapsed: {Math.floor(timeElapsed * 0.001)}s</p>
      <div className="quiz-content">
        {showScore ? (
          // Viser resultatseksjonen hvis showScore er true
          <div className="score-section">
            {score === questionsData.length ? <Confetti force={2} width={window.innerWidth} height={window.innerHeight} /> : null}
            {/* make confetti */}
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
    </>
  );
};


export default function App() {
  const [quizActive, setQuizActive] = useState(false);
  return (
    <div className="quiz-container">
      <h1>Quiz om IT</h1>
      {quizActive ? <QuizApp setActive={setQuizActive} /> : <button className='startbut' onClick={() => setQuizActive(true)}>Start quiz</button>}
    </div>
  );
}