import React from "react";

import soccerBall from "../../../common/assets/soccer-ball.png";

import {
  StyledHeader,
  HeroImage,
  Head,
  SoccerBall,
  HeadWrapper,
} from "./styled";

export const Header = () => {
  return (
    <StyledHeader>
      <HeadWrapper>
        <SoccerBall src={soccerBall} alt="soccer ball icon" />
        <Head>
          M<span>ajor</span> S<span>occer</span> G<span>eeks</span>
        </Head>
      </HeadWrapper>
      <HeroImage />
    </StyledHeader>
  );
};
