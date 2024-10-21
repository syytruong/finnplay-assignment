import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { useFilter } from '../context/FilterContext';

const GamesContainer = styled.div<{ columns: number }>`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: 20px;
  height: fit-content;
  max-height: 100%;
`;

const GameItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  width: 100%;

  &:hover {
    filter: brightness(0.8);
  }
`;

const GameList: React.FC = () => {
  const { games, columns } = useFilter();

  return (
    <GamesContainer columns={columns}>
      {games.map((game) => (
        <GameItem key={game.id}>
          <Logo src={game.logo} alt={game.name} />
        </GameItem>
      ))}
    </GamesContainer>
  );
};

export default GameList;
