import styled from 'styled-components';

const Photos = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Photo = styled.img`
  margin: 0 10px 10px 0;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 20%;
`;

export { Photos, Photo };
