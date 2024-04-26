import React from 'react';

function EquipmentList({ borrowedEquipment }) {
  return (
    <div>
      <h2>Lånt utstyr:</h2>
      {borrowedEquipment.length > 0 ? (
        <ul>
          {borrowedEquipment.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      ) : (
        <p>Ingen utstyr er lånt ut for øyeblikket.</p>
      )}
    </div>
  );
}

export default EquipmentList;
