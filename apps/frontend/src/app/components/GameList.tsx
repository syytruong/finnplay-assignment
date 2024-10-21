import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Logo from './Logo';

const GamesContainer = styled.div<{ columns: number }>`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: 20px;
  height: fit-content;
  max-height: 100%;
  overflow: auto;
`;

const GameItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  width: 100%;

  &:hover .game-name {
    opacity: 1;
  }
`;

const GameName = styled.div`
  position: absolute;
  bottom: 50px;
  left: 30px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;
`;

interface Game {
  id: number;
  name: string;
  logo: string;
}

interface GameListProps {
  columns: number;
  games: Game[];
}

const GameList: React.FC<GameListProps> = ({ columns, games }) => {
  return (
    <GamesContainer columns={columns}>
      {games.map((game) => (
        <GameItem key={game.id}>
          <Logo src={game.logo} alt={game.name} />
          <GameName className="game-name">{game.name}</GameName>
        </GameItem>
      ))}
    </GamesContainer>
  );
};

export default GameList;
