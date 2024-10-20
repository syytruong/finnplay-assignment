import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { useAuth } from './AuthContext';

const StyledApp = styled.div`
  // Your style here
`;

const App: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledApp>
      <Router>
        <Routes>
          <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </StyledApp>
  );
};

export default App;