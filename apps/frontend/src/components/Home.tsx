import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <h1>Welcome to the Home Page</h1>
    </HomeContainer>
  );
};

export default Home;