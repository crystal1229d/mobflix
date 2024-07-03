import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '@/styles/colorPalette'

export default function Logo() {
  return (
    <Link to="/">
      <LogoText>mobflix</LogoText>
    </Link>
  )
}

const LogoText = styled.p`
  display: inline-block;
  position: relative;
  margin-right: 50px;

  font-size: 50px;
  font-weight: 800;
  color: ${colors.redForLogo};

  text-transform: uppercase;

  & {
    cursor: pointer;
  }
`
