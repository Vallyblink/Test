import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url('https://res.cloudinary.com/teamprojectavatar/image/upload/v1697915125/TestTask/apscybv8sm2fmhsz8jdm.jpg');  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-family: 'Merriweather', serif;
  color: #fff;
  width: 1085px;
`;

const Button = styled.button`
  background: transparent;
  font-family: 'Merriweather', serif;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, 1);
  padding: 10px 24px;
//   width: 822px;
`

function HomeWrapper() {
  return (
    <Wrapper>
      <Text>
            <h1>The chemical  negatively charged</h1>
            <p>Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is </p>
      </Text>
      <Button>Get Started</Button>
    </Wrapper>
  );
}

export default HomeWrapper;