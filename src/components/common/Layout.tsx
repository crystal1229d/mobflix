import styled from 'styled-components'
import Flex from '@common/Flex'

function Layout({ children }: { children: React.ReactNode }) {
  return <StyledFlex dir="column">{children}</StyledFlex>
}

const StyledFlex = styled(Flex)`
  width: 90vw;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  oveflow-y: auto;
`

export default Layout
