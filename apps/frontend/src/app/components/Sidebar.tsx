import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Filter from './Filter';
import SearchTools from './SearchTools';

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
}

const Sidebar: React.FC<SidebarProps> = ({ providers, groups }) => {
  return (
    <SidebarContainer>
      <SearchTools />
      <Filter>Filter</Filter>
      <Button>Reset</Button>
    </SidebarContainer>
  );
};

export default Sidebar;