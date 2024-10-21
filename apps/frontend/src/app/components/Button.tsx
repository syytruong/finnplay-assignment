import { ReactNode, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants';

type ButtonType = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonContainer = styled.button`
  height: 42px;
  border-radius: 4px;
  box-shadow: 0px -2px 18px 0px ${COLORS.shadow};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  background-color: ${COLORS.white};
  color: ${COLORS.darkGray};

  &:hover,
  &:active {
    color: #2b2b2b;
    box-shadow: 0px 0px 4px 0px ${COLORS.activeShadow};
  }

  &:active {
    background-color: ${COLORS.white};
  }
`;

export default function Button({ children, ...props }: ButtonType) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}