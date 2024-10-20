import { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonType = {
  children: ReactNode;
};

const ButtonContainer = styled.button`
  height: 42px;
  border-radius: 4px;
  box-shadow: 0px -2px 18px 0px #8080801a;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  background-color: #ffffff;
  color: #808080;

  &:hover,
  &:active {
    color: #2b2b2b;
    box-shadow: 0px 0px 4px 0px #8080800F;
  }

  &:active {
    background-color: #fdfdfd;
  }
`;

export default function Button({ children, ...props }: ButtonType) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}
