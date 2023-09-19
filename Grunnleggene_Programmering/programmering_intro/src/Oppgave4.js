import { useState } from 'react';

function GuessingGame() {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 51));
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Gjett et tall mellom 0 og 50.');
  const [ count, setcount] = useState(0)

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuess = () => {
    const guessNumber = parseInt(guess, 10);
    setcount((a)=>a+1)
    if (isNaN(guessNumber)) {
      setMessage('Vennligst skriv inn et gyldig tall.');
    } else if (guessNumber === targetNumber) {
      setMessage(`Gratulerer! Du gjettet riktig: ${targetNumber}`);
    } else if (guessNumber < targetNumber) {
      setMessage('Tallet er for lavt. Prøv igjen.');
    } else if (guessNumber > targetNumber) {
      setMessage('Tallet er for høyt. Prøv igjen.');
    }
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
      />
      <button onClick={handleGuess}>Gjett</button>
    </div>
  );
}

export default GuessingGame;
