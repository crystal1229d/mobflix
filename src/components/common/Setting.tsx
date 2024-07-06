import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { IoSettingsOutline } from 'react-icons/io5'

export default function Setting() {
  return (
    <StyledLink to="/setting">
      <IoSettingsOutline
        className="icon"
        color="gray"
        size={27}
      />
    </StyledLink>
  )
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`

const StyledLink = styled(Link)`
  display: inline-block;
  cursor: pointer;

  &:hover .icon {
    animation: ${rotate} 2s linear infinite;
  }
`
