import styled from 'styled-components'

import Flex from '@common/Flex'
import { MdOutlineEdit } from 'react-icons/md'

interface ButtonEditProps {
  onClick: () => void
}

export default function ButtonEdit({ onClick }: ButtonEditProps) {
  return (
    <StyledFlex onClick={onClick}>
      <MdOutlineEdit size={20} />
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
