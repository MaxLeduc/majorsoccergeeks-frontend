import React from 'react'

import soccerBall from '../../assets/soccer-ball.png'
import { LoadingIcon, LoadingWrapper } from './styles'

export const Loading = () => {
  return <LoadingWrapper>
    <LoadingIcon src={soccerBall} alt="soccer ball"/>
    <p>Loading...</p>
  </LoadingWrapper>
}
