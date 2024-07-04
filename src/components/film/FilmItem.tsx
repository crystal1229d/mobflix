import styled from 'styled-components'

import { IFilm } from '@models/film'
import { colors } from '@styles/colorPalette'
import Rating from '@common/Rating'
import Text from '@common/Text'
import ButtonDelete from '@common/ButtonDelete'
import Spacing from '@common/Spacing'

interface FilmItemProps {
  film: IFilm
  removeFilm: (id: string) => void
}

export default function FilmItem({ film, removeFilm }: FilmItemProps) {
  const { title, rating } = film

  return (
    <StyledItem>
      <div>
        {title.length > 10 ? (
          <TitleWrapper>
            <Title>
              <Text
                typography="t5"
                bold>
                {title}
              </Text>
            </Title>
          </TitleWrapper>
        ) : (
          <Text
            typography="t5"
            bold>
            {title}
          </Text>
        )}
        <Spacing size={5} />
        <Rating rating={rating} />
      </div>
      <Spacing size={12} />
      <ButtonDelete onClick={() => removeFilm(film.id)} />
    </StyledItem>
  )
}

const StyledItem = styled.li`
  width: 150px;
  height: 90px;
  padding: 10px;
  contentx-box: border-box;

  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  background-color: ${colors.gray50};

  div {
    width: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const TitleWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`

const Title = styled.p`
  display: inline-block;
  white-space: nowrap;
  animation: marquee 7s linear infinite;
  margin: 0;
  padding: 1px;

  @keyframes marquee {
    0% {
      transform: translateX(10%);
    }
    10% {
      transform: translateX(10%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`
