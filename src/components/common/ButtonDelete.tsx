import styled from 'styled-components'

import Flex from '@common/Flex'
import { IoTrashOutline } from 'react-icons/io5'

interface ButtonDeleteProps {
  onClick: () => void
}

export default function ButtonDelete({ onClick }: ButtonDeleteProps) {
  return (
    <StyledFlex onClick={onClick}>
      <IoTrashOutline size={20} />
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
