import styled from 'styled-components'

import Logo from '@/components/common/Logo'
import UpperNavbar from '@/components/common/UpperNavbar'

export default function Header() {
  return (
    <Container>
      <Logo />
      <UpperNavbar />
    </Container>
  )
}

const Container = styled.header`
  width: 90vw;
  height: 60px;
  margin: 10px auto;

  display: flex;
  align-items: center;
`
