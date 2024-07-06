import styled from 'styled-components'

import Logo from '@common/Logo'
import UpperNavbar from '@common/UpperNavbar'
import Search from '@common/Search'
import Setting from '@common/Setting'

export default function Header() {
  return (
    <Container>
      <Logo />
      <UpperNavbar />
      <Search />
      <Setting />
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
