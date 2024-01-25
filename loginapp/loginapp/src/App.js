import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = () => {
    // Check username and password
    if (username === 'admin' && password === 'password') {
      // Successful login
      alert('Login successful');
    } else {
      // Failed login
      setShowAlert(true);
    }
  }

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {showAlert && <div>Invalid username or password</div>}
    </div>
  );
}

export default App;
