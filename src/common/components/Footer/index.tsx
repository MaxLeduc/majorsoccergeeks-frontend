import React from 'react'

import { ExternalWrapper, SocialWrapper, TwitterLink, InnerWrapper } from './styles'
import TwitterIcon from './assets/twitter.png'

export const Footer = () => {
  const year = new Date().getFullYear()

  return <ExternalWrapper>
    <InnerWrapper>
      <p>&#169; {year} Maxime Leduc</p>
      <SocialWrapper>
        <p>Find me on Twitter:</p>
        <TwitterLink rel="noopener noreferrer" target="_blank" href="https://twitter.com/ledukeness">
          <img src={TwitterIcon} alt="twitter icon" />
        </TwitterLink>
      </SocialWrapper>
    </InnerWrapper>
  </ExternalWrapper>
}
