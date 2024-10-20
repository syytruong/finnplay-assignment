import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import GameList from '../components/GameList';
import SearchTools from '../components/SearchTools';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px 80px;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

const Home: React.FC = () => {
  const [columns, setColumns] = useState(4);

  return (
    <>
      <Header />
      <HomeContainer>
        <ContentContainer>
          <GameList columns={columns} />
          <SearchTools />
        </ContentContainer>
      </HomeContainer>
    </>
  );
};

export default Home;