import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 2520px; /* 630px * 4 */
  height: 400px;
`;

const DataContainer = styled.div`

`;

const Text = styled.div`
  font-family: 'Merriweather', serif;
  color: #fff;
  width: 100%;
`;

function MainWrapper() {
  return (
    <Wrapper>
      <DataContainer>
        <Text>
          <h1>The chemical negatively charged</h1>
          <p>Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is </p>
        </Text>
      </DataContainer>
    </Wrapper>
  );
}

export default MainWrapper;