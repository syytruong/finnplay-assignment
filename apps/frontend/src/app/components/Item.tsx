import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { FaPen, FaTimes } from 'react-icons/fa';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ItemName = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 3px;

  &:hover {
    background-color: #0056b3;
  }

  & + & {
    margin-left: 10px;
  }
`;

interface ItemProps {
  logoSrc: string;
  logoAlt: string;
  name: string;
  showButtons: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

const Item: React.FC<ItemProps> = ({ logoSrc, logoAlt, name, showButtons, onEdit, onDelete }) => {
  return (
    <ItemContainer>
      <Logo src={logoSrc} alt={logoAlt} />
      <ItemName>{name}</ItemName>
      {showButtons && (
        <ButtonContainer>
          <Button onClick={onEdit}>
            <FaPen style={{ marginRight: '5px' }} />
            Edit
          </Button>
          <Button onClick={onDelete}>
            <FaTimes style={{ marginRight: '5px' }} />
            Delete
          </Button>
        </ButtonContainer>
      )}
    </ItemContainer>
  );
};

export default Item;