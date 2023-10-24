import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 10px;
`;

const Title = styled.h1`
 font-family: 'Merriweather', serif;
 color: rgba(178, 159, 126, 1);
 margin-left: 80px;
`

function MainHeader() {

  return (
    <HeaderContainer>
          <Title> Open Deals </Title>
    </HeaderContainer>
  );
}

export default MainHeader;
