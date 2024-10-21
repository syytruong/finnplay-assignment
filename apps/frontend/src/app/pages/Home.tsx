import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../components/Header';
import GameList from '../components/GameList';
import Sidebar from '../components/Sidebar';
import { useFilter } from '../context/FilterContext';
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

interface Game {
  id: number;
  name: string;
  provider: string;
  groups: string[];
  logo: string;
}

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
  const [games, setGames] = useState<Game[]>([]);
  const [providers, setProviders] = useState<string[]>([]);
  const [gameGroups, setGameGroups] = useState<string[]>([]);
  const { searchTerm, selectedProviders, selectedGroups } = useFilter();
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
    const fetchProvidersAndGroups = async () => {
      try {
        const response = await axios.get('/api/games');
        const providersSet = new Set<string>();
        const groupsSet = new Set<string>();

        response.data.forEach((game: Game) => {
          providersSet.add(game.provider);
          game.groups.forEach((group: string) => {
            groupsSet.add(group);
          });
        });

        const providers = Array.from(providersSet);
        const groups = Array.from(groupsSet);

        setProviders(providers);
        setGameGroups(groups);
      } catch (err) {
        console.error('Failed to fetch providers and groups', err);
      }
    };

    fetchProvidersAndGroups();
  }, []);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('/api/games', {
          params: {
            search: searchTerm,
            group: selectedGroups.join(','),
            provider: selectedProviders.join(','),
          },
        });

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
  }, [searchTerm, selectedGroups, selectedProviders]);

  return (
    <>
      <Header />
      <HomeContainer>
        <ContentContainer>
          <GameList columns={columns} games={games} />
          <Sidebar providers={providers} groups={gameGroups} gamesAmount={games.length} />
        </ContentContainer>
      </HomeContainer>
    </>
  );
};

export default Home;