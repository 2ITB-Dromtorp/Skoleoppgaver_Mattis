import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const login = (username) => {
    setLoggedInUser(username);
    localStorage.setItem('loggedInUser', username);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route
            path="/login"
            element={<Login login={login} />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/student-dashboard"
            element={
              loggedInUser ? (
                <StudentDashboard user={loggedInUser} />
              ) : (
                <Login login={login} />
              )
            }
          />
          <Route
            path="/teacher-dashboard"
            element={TeacherDashboard}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
