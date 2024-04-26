import React from 'react';

const Home = () => {
  return (
    <div>
      <h2>Velkommen til Utlånssystemet</h2>
      <p>Velg en av følgende alternativer:</p>
      <ul>
        <li>
          <a href="/login">Logg inn</a>
        </li>
        <li>
          <a href="/register">Registrer deg</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
