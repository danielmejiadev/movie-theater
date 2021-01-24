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

export const Content = styled.div`
  cursor: pointer;
  position: relative;
  margin-left: 5px;
`;

export const Title = styled.h2`
  font-size: 1em;
  margin-top: 20px;
  margin-bottom: 0px;
  font-weight: 700;
`;

export const Date = styled.p`
  font-size: 1em;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.6);
`;

export const Rating = styled.div`
  position: absolute;
  top: -45px;
  color: white;
  padding: 6px;
  border-radius: 40px;
  background-color: rgb(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;

  p {
    margin: 0px;
    margin-top: -5px;
    font-size: 0.8em;
  }
`;
