import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/img/logo.png';
import { useAuth } from '../AuthContext';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 80px;
  box-shadow: 0px -2px 18px 0px #8080801a;
`;

const Logo = styled.img`
  height: 40px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProfileIcon = styled.span`
  width: 30px;
  height: 30px;
  background-color: #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const LogoutText = styled.span`
  font-size: 16px;
`;

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const handleLogout = async () => {
    try {
      const response = await axios.post('/api/logout');

      if (response.status === 200) {
        setIsLoggedIn(false);
        navigate('/login', { replace: true });
      }
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <ProfileContainer onClick={handleLogout}>
        <ProfileIcon>
          👤
        </ProfileIcon>
        <LogoutText>Logout</LogoutText>
      </ProfileContainer>
    </HeaderContainer>
  );
};

export default Header;
