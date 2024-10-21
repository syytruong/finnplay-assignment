import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterSection from './FilterSection';
import { useFilter } from '../context/FilterContext';

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Filters: React.FC = () => {
  const {
    providers,
    groups,
    selectedProviders,
    setSelectedProviders,
    selectedGroups,
    setSelectedGroups,
    sortOptions,
    selectedSortOption,
    setSelectedSortOption,
    columns,
    setColumns,
  } = useFilter();

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 380);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 380);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleProviderChange = (provider: string) => {
    setSelectedProviders((prev: string[]) =>
      prev.includes(provider) ? prev.filter(p => p !== provider) : [...prev, provider]
    );
  };

  const handleGroupChange = (group: string) => {
    setSelectedGroups((prev: string[]) =>
      prev.includes(group) ? prev.filter(g => g !== group) : [...prev, group]
    );
  };

  const handleSortOptionChange = (option: string) => {
    setSelectedSortOption(option);
  };

  const handleColumnChange = (value: number) => {
    setColumns(value);
  };

  return (
    <FiltersContainer>
      <FilterSection
        title="Providers"
        options={providers}
        selectedOptions={selectedProviders}
        onOptionChange={handleProviderChange}
      />
      <FilterSection
        title="Game groups"
        options={groups}
        selectedOptions={selectedGroups}
        onOptionChange={handleGroupChange}
      />
      <FilterSection
        title="Sorting"
        options={sortOptions}
        selectedOptions={[selectedSortOption]}
        onOptionChange={handleSortOptionChange}
      />
      {isLargeScreen && (
        <FilterSection
          title="Columns"
          options={['2', '3', '4']}
          selectedOptions={[columns.toString()]}
          onOptionChange={(option) => handleColumnChange(parseInt(option))}
          isProgressBar
        />
      )}
    </FiltersContainer>
  );
};

export default Filters;