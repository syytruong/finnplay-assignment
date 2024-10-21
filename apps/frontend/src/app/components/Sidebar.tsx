import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Filter from './Filter';
import SearchTools from './SearchTools';
import { useFilter } from '../context/FilterContext';
import FilterFooter from './FilterFooter';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 32px;
  gap: 32px;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
`;

interface SidebarProps {
  providers: string[];
  groups: string[];
  gamesAmount: number;
}

const Sidebar: React.FC<SidebarProps> = ({ providers, groups, gamesAmount }) => {
  const { searchTerm, setSearchTerm, selectedProviders, setSelectedProviders, selectedGroups, setSelectedGroups, sortOptions, setSortOptions } = useFilter();

  return (
    <SidebarContainer>
      <SearchTools searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filter>Filter</Filter>
      <FilterFooter gamesAmount={gamesAmount ?? 0} />
    </SidebarContainer>
  );
};

export default Sidebar;