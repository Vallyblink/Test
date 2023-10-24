import React from 'react';
import styled from 'styled-components';
import data from '../data.json';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;
  overflow: auto;
`;

const DataBlock = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  width: 630px;
  height: 400px;
  margin-right: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  background-color: #ccc;
  position: relative;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Text = styled.div`
  font-family: 'Merriweather', serif;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 20px;
`;

const Title = styled.h1`
    margin-bottom: 10px;
    width: 100%;
    text-align: left;
    position: absolute;
    bottom: 102px;
    left: 15px;
    color: #fff;
`;

function MainWrapper() {
  return (
    <Wrapper>
      {data.map((item, index) => (
        <DataBlock
          key={index}
          style={{ backgroundImage: `url(${item.image_url})` }}
        >
          <Title>{item.name}</Title>
          <Text>
            <TextItem>
              <p>{item.price}</p>
              <p>Ticket - {item.ticket}</p>
            </TextItem>
            <TextItem>
              <p>Yield {item.yield}</p>
              <p>Days left {item.days_left}</p>
            </TextItem>
            <TextItem>
              <p>Sold {item.sold}</p>
            </TextItem>
          </Text>
        </DataBlock>
      ))}
    </Wrapper>
  );
}

export default MainWrapper;
