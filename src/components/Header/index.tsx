import React from 'react';
import { BannerImage, Wrapper, Title, Subtitle } from './styles';
import Search from '../Search';

function Header(): JSX.Element {
  return (
    <BannerImage>
      <Wrapper>
        <Title>Your favorite movies. Explained</Title>
        <Subtitle>Figure out what happened. Then find out why</Subtitle>
        <Search />
      </Wrapper>
    </BannerImage>
  );
}

export default Header;
