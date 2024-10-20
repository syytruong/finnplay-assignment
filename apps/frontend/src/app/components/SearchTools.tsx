import React from 'react';
import styled from 'styled-components';

const SearchToolsContainer = styled.div`
  width: 45%;
  padding: 20px 40px;
`;

const SearchTools: React.FC = () => {
  return (
    <SearchToolsContainer>
      <h2>Search Tools</h2>
      {/* Add search tools here */}
    </SearchToolsContainer>
  );
};

export default SearchTools;