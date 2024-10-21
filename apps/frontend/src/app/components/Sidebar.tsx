import React from 'react';
import styled from 'styled-components';
import Filters from './Filters';
import SearchTools from './SearchTools';
import FilterFooter from './FilterFooter';
import ColumnsSelector from './ColumnsSelector';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 32px;
  gap: 32px;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
`;


const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SearchTools />
      <Filters />
      <ColumnsSelector />
      <FilterFooter />
    </SidebarContainer>
  );
};

export default Sidebar;