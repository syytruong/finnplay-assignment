import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchTools from './SearchTools';
import Filters from './Filters';
import FilterFooter from './FilterFooter';
import { BsList } from 'react-icons/bs';
import { COLORS } from '../constants';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 32px;
  gap: 32px;
  border: 1px solid ${COLORS.lightGray};
  border-radius: 8px;

  @media (max-width: 428px) {
    padding: 20px;
  }
`;

const ShowFiltersLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 0;
  color: blue;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${COLORS.darkBlue};
  }
`;

const Sidebar: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 428) {
        setShowFilters(true);
      } else {
        setShowFilters(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <SidebarContainer>
      <SearchTools />
      {showFilters && (
        <>
          <Filters />
          <FilterFooter />
        </>
      )}
      {window.innerWidth <= 428 && (
        <ShowFiltersLink onClick={() => setShowFilters(!showFilters)}>
          <BsList />
          {showFilters ? 'Hide filters' : 'Show filters'}
        </ShowFiltersLink>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;