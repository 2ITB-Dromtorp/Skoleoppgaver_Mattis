import React from 'react';

const TeacherDashboard = () => {
  const handleApprove = (equipment) => {
    // Logikk for å godkjenne utlån av utstyr
    console.log(`Godkjent utlån av ${equipment}`);
  };

  return (
    <div>
      <h2>Lærerdashboard</h2>
      <h3>Godkjenning av utlån</h3>
      <ul>
        <li>
          Utstyr 1{' '}
          <button onClick={() => handleApprove('Utstyr 1')}>Godkjenn</button>
        </li>
        <li>
          Utstyr 2{' '}
          <button onClick={() => handleApprove('Utstyr 2')}>Godkjenn</button>
        </li>
        {/* Legg til flere utstyrsenheter etter behov */}
      </ul>
      {/* Andre funksjoner eller oversikter kan legges til her */}
    </div>
  );
};

export default TeacherDashboard;
