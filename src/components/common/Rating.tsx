import styled from 'styled-components'

import Text from '@common/Text'
import { colors } from '@/styles/colorPalette'

export default function Rating({ rating }: { rating: number }) {
  return (
    <Container>
      <span>
        <Text typography="t5">{rating} / 5</Text>
      </span>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;

  span {
    width: 37px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${colors.gold};
    border-radius: 100%;
  }
`
