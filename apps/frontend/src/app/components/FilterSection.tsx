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

const OptionsContainer = styled.div<{ isProgressBar?: boolean }>`
  display: flex;
  flex-wrap: ${({ isProgressBar }) => (isProgressBar ? 'nowrap' : 'wrap')};
  gap: 8px;
  width: 100%;
`;

const Option = styled.span<{ selected: boolean; isProgressBar?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? 'yellow' : 'transparent')};
  cursor: pointer;
  user-select: none;
  flex: ${({ isProgressBar }) => (isProgressBar ? '1' : 'auto')};
  text-align: center;

  &:hover {
    background-color: ${({ selected }) => (selected ? 'yellow' : '#f0f0f0')};
  }
`;

interface FilterSectionProps {
  title: string;
  options: string[];
  selectedOptions: string[];
  onOptionChange: (option: string) => void;
  isProgressBar?: boolean;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, options, selectedOptions, onOptionChange, isProgressBar }) => {
  return (
    <SectionContainer>
      <SectionHeader className="filter-headers">{title}</SectionHeader>
      <OptionsContainer isProgressBar={isProgressBar}>
        {options.map(option => (
          <Option
            key={option}
            selected={selectedOptions.includes(option)}
            onClick={() => onOptionChange(option)}
            isProgressBar={isProgressBar}
          >
            {option}
          </Option>
        ))}
      </OptionsContainer>
    </SectionContainer>
  );
};

export default FilterSection;