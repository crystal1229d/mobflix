import styled from 'styled-components'

import Flex from '@common/Flex'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { colors } from '@/styles/colorPalette'

interface ButtonSearchProps {
  onClick: () => void
}

export default function ButtonSearch({ onClick }: ButtonSearchProps) {
  return (
    <StyledFlex onClick={onClick}>
      <FaMagnifyingGlass
        size={20}
        color={colors.white}
      />
    </StyledFlex>
  )
}

const StyledFlex = styled(Flex)`
  cursor: pointer;

  &:hover {
    opacity: 0.6;
    transform: scale(1.1);
  }
`
