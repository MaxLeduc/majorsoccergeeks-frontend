import React from 'react'

import soccerBall from './assets/soccer-ball.png'
import { LoadingIcon, IconWrapper } from './styles'

export const Loading = () => {
  return <IconWrapper>
    <LoadingIcon src={soccerBall} alt="soccer ball"/>
    <p>Loading...</p>
  </IconWrapper>
}