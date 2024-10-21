import { ReactNode } from 'react';
import styled from 'styled-components';

type FilterType = {
  children?: ReactNode;
};

const FiltersContainer = styled.div`
  flex: 1;
`;

export default function Filters({ children, ...props }: FilterType) {
  return <FiltersContainer {...props}>{children}</FiltersContainer>;
}
