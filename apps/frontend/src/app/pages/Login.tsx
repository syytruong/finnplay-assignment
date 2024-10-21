import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import logo from '../../assets/img/logo.png';
import { COLORS } from '../constants';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .login-form {
    width: 412px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    .col {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
    }
  }

  @media (max-width: 380px) {
    .login-form {
      width: calc(100% - 48px);
    }
  }
`;

const Logo = styled.img`
  height: 70px;
  width: 70px;
`;

const Input = styled.input`
  height: 64px;
  border-radius: 4px;
  border: 1px solid ${COLORS.lightGray};
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
`;

const Button = styled.button`
  height: 64px;
  cursor: pointer;
  width: 100%;
  background-color: ${COLORS.primary};
  border-radius: 4px;
  box-shadow: 0px -2px 18px 0px ${COLORS.shadow};
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
`;

const ErrorMessage = styled.div`
  color: ${COLORS.error};
  padding: 10px;
  height: 39px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
`;

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { username, password });

      if (response.status === 200) {
        setIsLoggedIn(true);
        navigate('/home', { replace: true });
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <LoginContainer>
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <Logo src={logo} alt="Logo" />
        <div className="col">
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
        </div>
        <Button onClick={handleLogin}>Login</Button>
        <ErrorMessage style={{ opacity: error ? 1 : 0 }}>{error}</ErrorMessage>
      </form>
    </LoginContainer>
  );
};

export default Login;