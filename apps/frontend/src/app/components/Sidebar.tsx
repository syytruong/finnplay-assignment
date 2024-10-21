import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchTools from './SearchTools';
import Filters from './Filters';
import FilterFooter from './FilterFooter';
import ColumnsSelector from './ColumnsSelector';
import { BsList } from 'react-icons/bs';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 32px;
  gap: 32px;
  border: 1px solid #f2f2f2;
  border-radius: 8px;

  @media (max-width: 380px) {
    padding: 20px;
  }
`;

const ShowFiltersButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: none;
  background-color: #f2f2f2;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Sidebar: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 380) {
        setShowFilters(true);
      } else {
        setShowFilters(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <SidebarContainer>
      <SearchTools />
      {window.innerWidth <= 380 && (
        <ShowFiltersButton onClick={() => setShowFilters(!showFilters)}>
          <BsList />
          Show filters
        </ShowFiltersButton>
      )}
      {showFilters && (
        <>
          {window.innerWidth > 380 && <ColumnsSelector />}
          <Filters />
          <FilterFooter />
        </>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;