import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconSearch } from '@/assets/icons/search.svg';

const SearchToolsContainer = styled.div`
  width: 100%;
  height: 64px;
  border-radius: 4px;
  padding: 0 16px;
  display: flex;
  gap: 16px;
  border: 1px solid #f2f2f2;
  align-items: center;
  background-color: #fff;

  input {
    flex: 1;
    border: 0;
    font-size: 16px;
    font-weight: 400;
    height: 19px;
    line-height: 19px;
    &:focus-visible {
      outline: 0;
    }
  }
`;

interface SearchToolsProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchTools: React.FC<SearchToolsProps> = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <SearchToolsContainer>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <IconSearch />
    </SearchToolsContainer>
  );
};

export default SearchTools;