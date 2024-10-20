import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../components/Header';
import Logo from '../components/Logo';
import game1 from '../../assets/img/game1.jpeg';
import game2 from '../../assets/img/game2.jpeg';
import game3 from '../../assets/img/game3.jpg';
import game4 from '../../assets/img/game4.png';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const GamesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 75%;
  margin-top: 20px;
`;

const GameItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Game {
  id: number;
  name: string;
  logo: string;
}

const Home: React.FC = () => {
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
    <>
      <Header />
      <HomeContainer>
        <GamesContainer>
          {games.map((game) => (
            <GameItem key={game.id}>
              <Logo src={game.logo} alt={game.name} />
              <div>{game.name}</div>
            </GameItem>
          ))}
        </GamesContainer>
      </HomeContainer>
    </>
  );
};

export default Home;