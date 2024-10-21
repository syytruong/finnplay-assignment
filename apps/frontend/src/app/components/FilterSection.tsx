import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const SectionHeader = styled.span`
  font-size: 14px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Option = styled.span<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? 'yellow' : 'transparent')};
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${({ selected }) => (selected ? 'yellow' : '#f0f0f0')};
  }
`;

interface FilterSectionProps {
  title: string;
  options: string[];
  selectedOptions: string[];
  onOptionChange: (option: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, options, selectedOptions, onOptionChange }) => {
  return (
    <SectionContainer>
      <SectionHeader className="filter-headers">{title}</SectionHeader>
      <OptionsContainer>
        {options.map(option => (
          <Option
            key={option}
            selected={selectedOptions.includes(option)}
            onClick={() => onOptionChange(option)}
          >
            {option}
          </Option>
        ))}
      </OptionsContainer>
    </SectionContainer>
  );
};

export default FilterSection;