import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgb(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 400px;
`;

export const BannerImage = styled.div`
  background-image: url('https://mauiwatch.com/wp-content/uploads/2019/10/9D9FFEEF-96E9-4C70-88C8-2F8F92FC4CE2.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 3em;
  margin-bottom: 0px;
  color: white;
`;

export const Subtitle = styled.h2`
  text-align: center;
  font-weight: normal;
  color: white;
`;
