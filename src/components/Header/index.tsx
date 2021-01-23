import React from "react";
import { BannerImage, Wrapper, Title, Subtitle } from "./styles";

function Header() {
  return (
    <BannerImage>
      <Wrapper>
        <Title>Your favorite movies. Explained</Title>
        <Subtitle>Figure out what happened. Then find out why</Subtitle>
      </Wrapper>
    </BannerImage>
  );
}

export default Header;
