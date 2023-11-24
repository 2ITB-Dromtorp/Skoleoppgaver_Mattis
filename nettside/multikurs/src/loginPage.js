import React, { useState } from 'react';
import { useHistory } from 'react-router';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Her kan du implementere logikken for å validere brukernavn og passord
    // og utføre nødvendige handlinger etterpå, for eksempel å vise en velkomstmelding eller vise en feilmelding ved ugyldige påloggingsdetaljer.

    // Etter en vellykket pålogging kan du navigere til en ny side ved å bruke history.push()
    history.push('/dashboard'); // Endre "/dashboard" til URL-en for din ønskede side
  };

  return (
    <div>
      <h1>Logg inn</h1>
      <form>
        <div>
          <label htmlFor="username">Brukernavn:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label htmlFor="password">Passord:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="button" onClick={handleLogin}>Logg inn</button>
      </form>
    </div>
  );
}

export default loginPage;