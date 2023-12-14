import React, { useState } from 'react';
import Result from './Result';

const options = ['Rock', 'Paper', 'Scissors'];

function Game() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const playGame = (playerChoice) => {
    const computerChoice = generateComputerChoice();

    // Determine the result
    let gameResult;
    if (playerChoice === computerChoice) {
      gameResult = 'It\'s a tie!';
    } else if (
      (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
      (playerChoice === 'Paper' && computerChoice === 'Rock') ||
      (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      gameResult = 'You win!';
    } else {
      gameResult = 'Computer wins!';
    }

    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);
    setResult(gameResult);
  };

  return (
    <div className="game">
      <div className="options">
        {options.map((option) => (
          <button key={option} onClick={() => playGame(option)}>
            {option}
          </button>
        ))}
      </div>
      {playerChoice && computerChoice && (
        <Result
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          result={result}
        />
      )}
    </div>
  );
}

export default Game;
