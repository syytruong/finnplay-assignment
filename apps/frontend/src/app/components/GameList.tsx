import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Logo from './Logo';
import game1 from '../../assets/images/game-thumbnail-1.png';
import game11 from '../../assets/images/game-thumbnail-1-1.png';
import game12 from '../../assets/images/game-thumbnail-1-2.png';
import game13 from '../../assets/images/game-thumbnail-1-3.png';
import game14 from '../../assets/images/game-thumbnail-1-4.png';
import game2 from '../../assets/images/game-thumbnail-2.png';
import game21 from '../../assets/images/game-thumbnail-2-1.png';
import game22 from '../../assets/images/game-thumbnail-2-2.png';
import game23 from '../../assets/images/game-thumbnail-2-3.png';
import game24 from '../../assets/images/game-thumbnail-2-4.png';

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
}

const GameList: React.FC<GameListProps> = ({ columns }) => {
  const [games, setGames] = useState<Game[]>([]);
  const images = [
    game1,
    game11,
    game12,
    game13,
    game14,
    game2,
    game21,
    game22,
    game23,
    game24,
  ];

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('/api/games');
        const gamesWithImages = response.data.map((game: Game) => ({
          ...game,
          logo: images[Math.floor(Math.random() * images.length)],
        }));
        setGames(gamesWithImages);
      } catch (err) {
        console.error('Failed to fetch games', err);
      }
    };

    fetchGames();
  }, []);

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
