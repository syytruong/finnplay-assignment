import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../components/Header';
import GameList from '../components/GameList';
import Sidebar from '../components/Sidebar';
import { useFilter } from '../context/FilterContext';
import { Game } from '../types';
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

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 75px 80px;
  height: calc(100% - 60px);

  @media (max-width: 428px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  gap: 20px;

  @media (max-width: 428px) {
    flex-direction: column;
    gap: 10px;
    height: auto;
    overflow-y: scroll;
  }
`;

const Home: React.FC = () => {
  const { 
    setGameAmount,
    setGames,
    searchTerm,
    selectedProviders,
    selectedGroups,
    setProviders,
    setGroups,
    selectedSortOption,
    setColumns,
  } = useFilter();

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
        setGroups(groups);
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
            groups: selectedGroups,
            providers: selectedProviders,
            sort: selectedSortOption,
          },
        });

        const gamesWithImages = response.data.map((game: Game) => ({
          ...game,
          logo: images[Math.floor(Math.random() * images.length)],
        }));

        setGames(gamesWithImages);
        setGameAmount(gamesWithImages.length);
      } catch (err) {
        console.error('Failed to fetch games', err);
      }
    };

    fetchGames();
  }, [searchTerm, selectedGroups, selectedProviders, selectedSortOption]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 428) {
        setColumns(2);
      } else {
        setColumns(4);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setColumns]);

  return (
    <>
      <Header />
      <HomeContainer>
        <ContentContainer>
          {window.innerWidth <= 428 ? (
            <>
              <Sidebar />
              <GameList />
            </>
          ) : (
            <>
              <GameList />
              <Sidebar />
            </>
          )}
        </ContentContainer>
      </HomeContainer>
    </>
  );
};

export default Home;