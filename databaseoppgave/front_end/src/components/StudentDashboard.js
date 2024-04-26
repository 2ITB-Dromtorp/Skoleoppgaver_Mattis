import React from 'react';

const StudentDashboard = ({ user }) => {
  return (
    <div>
      <h2>Student Dashboard</h2>
      <p>Velkommen, {user}!</p>
      {/* Her kan du legge til innhold og funksjonalitet for studentdashboardet */}
    </div>
  );
};

export default StudentDashboard;
