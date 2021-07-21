import styled from 'styled-components'

import heroImage from './assets/hero.jpeg'

export const StyledHeader = styled.div`
`

export const NavBar = styled.div`
  padding: 20px;
`

export const HeroImage = styled.div`
  height: 60vh;
  background-image: url(${heroImage});
  background-position: 40% 60%;
  background-repeat: no-repeat;
  background-attachment: fixed;
`
