import React from 'react';
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
  } = useFilter();

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

  return (
    <FiltersContainer>
      <FilterSection
        title="Providers"
        options={providers}
        selectedOptions={selectedProviders}
        onOptionChange={handleProviderChange}
      />
      <FilterSection
        title="Groups"
        options={groups}
        selectedOptions={selectedGroups}
        onOptionChange={handleGroupChange}
      />
      <FilterSection
        title="Sort Options"
        options={sortOptions}
        selectedOptions={[selectedSortOption]}
        onOptionChange={handleSortOptionChange}
      />
    </FiltersContainer>
  );
};

export default Filters;