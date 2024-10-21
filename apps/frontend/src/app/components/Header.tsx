import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/img/logo.png';
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from '../AuthContext';
import { COLORS } from '../constants';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 80px;
  box-shadow: 0px -2px 18px 0px ${COLORS.shadow};

  @media (max-width: 380px) {
    padding: 10px 20px;
  }
`;

const Logo = styled.img`
  height: 40px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${COLORS.secondary};
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
        <FaRegUserCircle />&nbsp;
        <LogoutText>Logout</LogoutText>
      </ProfileContainer>
    </HeaderContainer>
  );
};

export default Header;
