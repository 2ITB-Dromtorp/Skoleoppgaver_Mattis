import React from 'app';

function Result({ playerChoice, computerChoice, result }) {
  return (
    <div className="result">
      <p>Your Choice: {playerChoice}</p>
      <p>Computer's Choice: {computerChoice}</p>
      <p>Result: {result}</p>
    </div>
  );
}

export default Result;
