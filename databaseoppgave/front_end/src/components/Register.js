import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    // Validering av skjema
    if (!username || !password || !confirmPassword) {
      setError('Alle felt må fylles ut');
    } else if (password !== confirmPassword) {
      setError('Passordene stemmer ikke overens');
    } else {
      // Registrering av bruker
      register();
    }
  };

  const register = () => {
    const url = 'http://localhost:5000/registrer'; // Replace with your API endpoint

    const userData = {
      username: username,
      password: password
    };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  };

  fetch(url, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle response data
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      console.error('There was a problem with your fetch operation:', error);
    });

  };

  return (
    <div>
      <h2>Registrer deg</h2>
      <input
        type="text"
        placeholder="Brukernavn"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Passord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Bekreft passord"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Registrer deg</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Register;
