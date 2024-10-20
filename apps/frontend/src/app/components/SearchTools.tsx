import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CiSearch } from "react-icons/ci";
import { useFilter } from '../context/FilterContext';
import { COLORS } from '../constants';

const SearchToolsContainer = styled.div`
  width: 100%;
  height: 64px;
  border-radius: 4px;
  padding: 0 16px;
  display: flex;
  gap: 16px;
  border: 1px solid ${COLORS.lightGray};
  align-items: center;
  background-color: #fff;

  @media (max-width: 428px) {
    height: 48px;
    padding: 0 8px;
  }

  input {
    flex: 1;
    border: 0;
    font-size: 16px;
    font-weight: 400;
    height: 40px;
    line-height: 40 px;
    &:focus-visible {
      outline: 0;
    }

    @media (max-width: 428px) {
      height: 20px;
      line-height: 20px;
    }
  }

  svg {
    flex-shrink: 0;
    width: 24px;
    height: 24px;

    @media (max-width: 428px) {
      margin-left: -25px;
    }
  }
`;

const SearchTools: React.FC = () => {
  const { searchTerm, setSearchTerm } = useFilter();
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    setDebouncedSearchTerm(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(debouncedSearchTerm);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedSearchTerm, setSearchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDebouncedSearchTerm(e.target.value);
  };

  return (
    <SearchToolsContainer>
      <input
        type="text"
        placeholder="Search"
        value={debouncedSearchTerm}
        onChange={handleInputChange}
      />
      <CiSearch />
    </SearchToolsContainer>
  );
};

export default SearchTools;