import React from 'react';
import styled from 'styled-components';
import { useFilter } from '../context/FilterContext';

const SelectorContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Option = styled.span<{ selected: boolean }>`
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? 'yellow' : 'transparent')};
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${({ selected }) => (selected ? 'yellow' : '#f0f0f0')};
  }
`;

const ColumnsSelector: React.FC = () => {
  const { columns, setColumns } = useFilter();

  const handleOptionClick = (value: number) => {
    setColumns(value);
  };

  return (
    <SelectorContainer>
      {[2, 3, 4].map(value => (
        <Option
          key={value}
          selected={columns === value}
          onClick={() => handleOptionClick(value)}
        >
          {value}
        </Option>
      ))}
    </SelectorContainer>
  );
};

export default ColumnsSelector;