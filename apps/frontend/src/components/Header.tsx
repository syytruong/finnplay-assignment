import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/img/logo.png'; // Adjust the path if necessary

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
`;

const Logo = styled.img`
  height: 40px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProfileIcon = styled.div`
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

  const handleLogout = async () => {
    try {
      const response = await axios.post('/api/logout');
      console.log(response);
      if (response.status === 200) {
        navigate('/login');
      }
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <ProfileContainer onClick={handleLogout}>
        <ProfileIcon>👤</ProfileIcon>
        <LogoutText>Logout</LogoutText>
      </ProfileContainer>
    </HeaderContainer>
  );
};

export default Header;