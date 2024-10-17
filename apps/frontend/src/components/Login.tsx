import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: red;
  margin: 10px;
`;

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { username, password });
      if (response.status === 200) {
        alert('Login successful');
        // Redirect to the player view or handle successful login
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <LoginContainer>
      <h1>Login</h1>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </LoginContainer>
  );
};

export default Login;