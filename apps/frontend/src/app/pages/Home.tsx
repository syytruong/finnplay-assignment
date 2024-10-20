import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import GameList from '../components/GameList';
import SearchTools from '../components/SearchTools';
import Sidebar from '../components/Sidebar';
import Button from '../components/Button';
import Filter from '../components/Filter';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 75px 80px;
  height: calc(100% - 60px);
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  gap: 20px;
`;

const Home: React.FC = () => {
  const [columns, setColumns] = useState(4);

  return (
    <>
      <Header />
      <HomeContainer>
        <ContentContainer>
          <GameList columns={columns} />
          <Sidebar />
        </ContentContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
