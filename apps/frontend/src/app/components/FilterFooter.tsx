import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { useFilter } from '../context/FilterContext';

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.span`
  font-size: 14px;
`;

interface FooterProps {
  gamesAmount: number;
}

const FilterFooter: React.FC<FooterProps> = ({ gamesAmount }) => {
  const { resetFilters } = useFilter();

  return (
    <FooterContainer>
      <Text className="filter-headers">Game amount: {gamesAmount}</Text>
      <Button onClick={resetFilters}>Reset</Button>
    </FooterContainer>
  );
};

export default FilterFooter;