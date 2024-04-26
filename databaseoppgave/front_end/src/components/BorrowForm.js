import React, { useState } from 'react';

function BorrowForm({ onBorrow }) {
  const [equipment, setEquipment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sjekk om utstyret ikke er tomt før du utfører utlån
    if (equipment.trim() !== '') {
      // Kall onBorrow-funksjonen med det utlånte utstyret
      onBorrow(equipment);
      // Nullstill skjemaet etter at utlånet er gjennomført
      setEquipment('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Lån utstyr</h2>
      <div>
        <label htmlFor="equipment">Utstyr:</label>
        <input
          type="text"
          id="equipment"
          value={equipment}
          onChange={(e) => setEquipment(e.target.value)}
        />
      </div>
      <button type="submit">Lån ut</button>
    </form>
  );
}

export default BorrowForm;
