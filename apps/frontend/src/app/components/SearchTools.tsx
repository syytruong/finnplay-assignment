import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconSearch } from '@/assets/icons/search.svg';

const SearchToolsContainer = styled.div`
  height: 64px;
  border-radius: 4px;
  padding: 0 16px;
  display: flex;
  gap: 16px;
  border: 1px solid #f2f2f2;
  align-items: center;
  background-color: #fff;

  input {
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

const SearchTools: React.FC = () => {
  return (
    <SearchToolsContainer>
      <input type="text" placeholder='Search' />
      <IconSearch />
    </SearchToolsContainer>
  );
};

export default SearchTools;
