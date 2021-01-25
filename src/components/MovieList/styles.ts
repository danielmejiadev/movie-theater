import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  justify-content: flex-start;
  grid-gap: 20px;
`;

export const Empty = styled.div`
  margin: auto;
  text-align: center;
`;
