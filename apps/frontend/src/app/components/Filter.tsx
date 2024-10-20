import { ReactNode } from 'react';
import styled from 'styled-components';

type FilterType = {
  children?: ReactNode;
};

const FilterContainer = styled.div`
  flex: 1;
`;

export default function Filter({ children, ...props }: FilterType) {
  return <FilterContainer {...props}>{children}</FilterContainer>;
}
