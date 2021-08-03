import React from "react";

import {
  ExternalWrapper,
  TwitterLink,
  InnerWrapper,
  MobileBottomNavOffset,
} from "./styles";
import TwitterIcon from "./assets/twitter.png";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <ExternalWrapper>
        <InnerWrapper>
          <p>&#169; {year} Maxime Leduc</p>
          <TwitterLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/ledukeness"
          >
            <img src={TwitterIcon} alt="twitter icon" />
          </TwitterLink>
        </InnerWrapper>
        {/* this is here so that the footer is visible when the bottom nav is present on mobile */}
      </ExternalWrapper>
      <MobileBottomNavOffset />
    </>
  );
};
