import React, { useState } from 'react';

const Login = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Her kan du legge til logikk for å validere brukernavn og passord
    if (username === 'admin' && password === 'password') {
      login(username); // Logger inn brukeren med brukernavnet
    } else {
      setError('Feil brukernavn eller passord');
    }
  };

  return (
    <div>
      <h2>Logg inn</h2>
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
      <button onClick={handleLogin}>Logg inn</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
