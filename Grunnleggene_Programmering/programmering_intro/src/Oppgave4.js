import { useState } from 'react';
import ConfettiExplosion, { ConfettiProps } from 'react-confetti-explosion';
import './confetti.css'


function GuessingGame() {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 6));
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Gjett et tall mellom 0 og 5.');
  const [ count, setcount] = useState(0)
  const [isExploding, setIsExploding] = useState(false);

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuess = () => {
    const guessNumber = parseInt(guess, 10);
    setcount(count + 1)
    if (isNaN(guessNumber)) {
      setMessage('Vennligst skriv inn et gyldig tall.');
    } else if (guessNumber === targetNumber) {
      setMessage(`Gratulerer! Du gjettet riktig: ${targetNumber}`);
      setIsExploding(true)
    } else if (guessNumber < targetNumber) {
      setMessage('Tallet er for lavt. Prøv igjen.');
    } else if (guessNumber > targetNumber) {
      setMessage('Tallet er for høyt. Prøv igjen.');
    }
  };

  const handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.keyCode === 13) {
    // this.handleGuess;
    console.log('You clicked enter')
    handleGuess();
  }
};

const largeProps = {
  force: 0.8,
  duration: 3000,
  particleCount: 300,
  width: 1600,
  colors: ['#041E43', '#1471BF', '#5BB4DC', '#FC027B', '#66D805'],
};



  return (
    <div>
      <h1>Gjettespillet</h1>
      <p>{message}</p>
      <p> {count} Forsøk </p> 
      <input
        type="number"
        value={guess}
        onChange={handleInputChange}
        onKeyDown={handleKeypress}
      />
      <>{isExploding && <ConfettiExplosion  {...largeProps} />}</>
      <button onClick={handleGuess}>Gjett</button>
    </div>
  );
}

export default GuessingGame;
