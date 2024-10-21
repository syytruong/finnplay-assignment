import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SectionHeader = styled.span`
  font-size: 14 px;
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    margin-right: 8px;
  }
`;

interface FilterSectionProps {
  title: string;
  options: string[];
  selectedOptions: string[];
  onOptionChange: (option: string) => void;
  isSelectableOnlyOne?: boolean;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, options, selectedOptions, onOptionChange, isSelectableOnlyOne }) => {
  return (
    <SectionContainer>
      <SectionHeader className='filter-headers'>{title}</SectionHeader>
      {options.map(option => (
        <Option key={option}>
          <input
            type="checkbox"
            checked={selectedOptions.includes(option)}
            onChange={() => onOptionChange(option)}
          />
          {option}
        </Option>
      ))}
    </SectionContainer>
  );
};

export default FilterSection;