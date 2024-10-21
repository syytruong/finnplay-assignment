import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedProviders: string[];
  setSelectedProviders: (providers: string[]) => void;
  selectedGroups: string[];
  setSelectedGroups: (groups: string[]) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);

  return (
    <FilterContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        selectedProviders,
        setSelectedProviders,
        selectedGroups,
        setSelectedGroups,
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