import styled from 'styled-components';

export const GridContainer = styled.div<{ image: string }>`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  color: white;
`;

export const Overlay = styled.div`
  padding: 40px;
  background-color: rgb(0, 0, 0, 0.8);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding-left: 40px;
`;

export const Title = styled.h2`
  margin: 0px;
  font-size: 2.2rem;
  font-weight: 700;
`;

export const Tags = styled.p`
  margin-top: 0px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;

  label {
    padding-left: 0px;
  }

  span {
    font-size: 1.2em;
  }
`;

export const Tagline = styled.h3`
  margin-bottom: 0;
  font-size: 1.1em;
  font-weight: 400;
  font-style: italic;
  opacity: 0.7;
`;

export const OverviewTitle = styled.h3`
  margin: 20px 0 8px 0;
`;

export const Overview = styled.p`
  margin: 0px;
`;

export const Tag = styled.p`
  display: flex;
  flex-direction: column;
`;
