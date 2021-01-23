import styled from 'styled-components';

export const ImageContainer = styled.div`
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
  min-height: 250px;
  height: 250px;
  background: #dbdbdb;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h2`
  font-size: 1em;
  margin-bottom: 0px;
  font-weight: 700;
`;

export const Date = styled.p`
  font-size: 1em;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.6);
`;

export const Content = styled.div`
  cursor: pointer;
`;
