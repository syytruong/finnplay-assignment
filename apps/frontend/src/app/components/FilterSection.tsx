import React from 'react';
import styled from 'styled-components';
import MilestoneProgressBar from './MilestoneProgressBar';
import { COLORS } from '../constants';

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
  background-color: ${({ selected }) => (selected ? COLORS.primary : 'transparent')};
  cursor: pointer;
  user-select: none;
  text-align: center;
  font-bolder: 200;

  &:hover {
    background-color: ${({ selected }) => (selected ? COLORS.primary : COLORS.lightGray)};
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
      {isProgressBar ? (
        <MilestoneProgressBar
          milestones={options.map(Number)}
          currentMilestone={Number(selectedOptions[0])}
          onMilestoneClick={(milestone) => onOptionChange(milestone.toString())}
        />
      ) : (
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
      )}
    </SectionContainer>
  );
};

export default FilterSection;