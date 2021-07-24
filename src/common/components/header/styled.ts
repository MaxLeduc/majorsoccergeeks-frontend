import styled from 'styled-components'

import heroImage from './assets/hero.jpeg'

export const StyledHeader = styled.div`
  background-color: #3f51b5;
`

export const Head = styled.h1`
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 0 10px;
  font-size: 1.4rem;
  position: relative;
  display: inline-block;
  color: white;

  > span {
    font-size: 1rem;
  }
`

export const HeroImage = styled.div`
  height: 40vh;
  background-image: url(${heroImage});
  background-position: 40% 70%;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

export const SoccerBall = styled.img`
  width: 20px;
  background-color: white;
  border-radius: 10px;
`

export const HeadWrapper = styled.div`
  max-width: 90%;
  margin-left: 30px;
  font-style: italic;
  text-align: center;
`