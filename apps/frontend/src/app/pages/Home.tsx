import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Logo from '../components/Logo';
import logo from '../../assets/img/logo.png';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <Logo src={logo} alt='Example' />
      </HomeContainer>
    </>
  );
};

export default Home;