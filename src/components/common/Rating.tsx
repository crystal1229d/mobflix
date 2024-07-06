import styled from 'styled-components'
import { observer } from 'mobx-react-lite'

import { IoStarOutline, IoStar } from 'react-icons/io5'

import Text from '@common/Text'
import { colors } from '@styles/colorPalette'
import { useRootStore } from '@contexts/StoreContext'

const Rating = observer(({ rating }: { rating: number }) => {
  const { uiStore } = useRootStore()

  const renderRating = () => {
    if (uiStore.ratingStyle === 'number') {
      return <Text typography="t5">{rating} / 5</Text>
    } else {
      const stars = []
      for (let i = 0; i < 5; i++) {
        if (i < rating) {
          stars.push(
            <IoStar
              key={i}
              color={colors.gold}
              size={20}
            />
          )
        } else {
          stars.push(
            <IoStarOutline
              key={i}
              color={colors.gold}
              size={20}
            />
          )
        }
      }
      return <span>{stars}</span>
    }
  }

  return <Container>{renderRating()}</Container>
})

const Container = styled.div`
  display: flex;
  justify-content: center;
`

export default Rating
