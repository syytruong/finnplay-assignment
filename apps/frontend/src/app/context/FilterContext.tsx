import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { Game } from '../types';

interface FilterContextType {
  games: Game[];
  setGames: Dispatch<SetStateAction<Game[]>>;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  providers: string[];
  setProviders: Dispatch<SetStateAction<string[]>>;
  selectedProviders: string[];
  setSelectedProviders: Dispatch<SetStateAction<string[]>>;
  groups: string[];
  setGroups: Dispatch<SetStateAction<string[]>>;
  selectedGroups: string[];
  setSelectedGroups: Dispatch<SetStateAction<string[]>>;
  sortOptions: string[];
  selectedSortOption: string;
  setSelectedSortOption: Dispatch<SetStateAction<string>>;
  gameAmount: number;
  setGameAmount: Dispatch<SetStateAction<number>>;
  columns: number;
  setColumns: Dispatch<SetStateAction<number>>;
  resetFilters: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [games, setGames] = useState<Game[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [providers, setProviders] = useState<string[]>([]);
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [groups, setGroups] = useState<string[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [selectedSortOption, setSelectedSortOption] = useState<string>('');
  const [gameAmount, setGameAmount] = useState<number>(0);
  const [columns, setColumns] = useState(4);
  const sortOptions = ['A-Z', 'Z-A', 'Newest'];

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedProviders([]);
    setSelectedGroups([]);
    setSelectedSortOption('');
    setGameAmount(0);
    setColumns(4);
  };

  return (
    <FilterContext.Provider
      value={{
        games,
        setGames,
        searchTerm,
        setSearchTerm,
        providers,
        setProviders,
        selectedProviders,
        setSelectedProviders,
        groups,
        setGroups,
        selectedGroups,
        setSelectedGroups,
        sortOptions,
        selectedSortOption,
        setSelectedSortOption,
        gameAmount,
        setGameAmount,
        columns,
        setColumns,
        resetFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};