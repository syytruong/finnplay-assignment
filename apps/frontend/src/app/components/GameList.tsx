import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Logo from './Logo';
import game1 from '../../assets/img/game1.jpeg';
import game2 from '../../assets/img/game2.jpeg';
import game3 from '../../assets/img/game3.jpg';
import game4 from '../../assets/img/game4.png';

const GamesContainer = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: 20px;
  width: 55%;
  margin-top: 20px;
`;

const GameItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;

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
  const images = [game1, game2, game3, game4];

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('/api/games');
        const gamesWithImages = response.data.map((game: Game) => ({
          ...game,
          logo: images[Math.floor(Math.random() * images.length)]
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