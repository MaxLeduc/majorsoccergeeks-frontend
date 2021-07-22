import React from 'react'

import { Wrapper } from './styles'

export const Footer = () => {
  const year = new Date().getFullYear()

  return <Wrapper>
    <p>&#169; {year} Maxime Leduc</p>
  </Wrapper>
}
