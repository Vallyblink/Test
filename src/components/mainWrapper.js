import React, { useEffect } from 'react';
import styled from 'styled-components';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../redux/dataSlice.js';
import { useDispatch } from 'react-redux';

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
 const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDataRequest());

    fetch('/data')
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error));
      });
  }, [dispatch]);
  
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