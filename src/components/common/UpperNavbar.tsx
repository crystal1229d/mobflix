import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import Text from '@common/Text'
import { NAVIGATION } from '@constants/index'

export default function UpperNavbar() {
  const location = useLocation()

  const [isSelected, setSelected] = useState(NAVIGATION[0].label)

  useEffect(() => {
    if (location.pathname === '/') {
      setSelected(NAVIGATION[0].label)
    }
  }, [location.pathname])

  return (
    <nav>
      <StyledMenu>
        {NAVIGATION.map(({ label, link }) => (
          <li
            key={label}
            onClick={() => setSelected(label)}>
            <Link to={link}>
              <Text
                typography="t3"
                color={isSelected === label ? 'white' : 'gray'}>
                {label}
              </Text>
            </Link>
          </li>
        ))}
      </StyledMenu>
    </nav>
  )
}

const StyledMenu = styled.menu`
  height: 100%;

  display: flex;
  gap: 25px;

  li {
    pointer: cursor;
  }

  li:hover {
    opacity: 0.8;
  }
`
