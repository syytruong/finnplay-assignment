import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 180px;
  height: 120px;
  object-fit: cover;
  border-radius: 10%;
`;

interface LogoProps {
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return (
    <LogoContainer>
      <LogoImage src={src} alt={alt} />
    </LogoContainer>
  );
};

export default Logo;