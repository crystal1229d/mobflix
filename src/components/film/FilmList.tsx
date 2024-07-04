import styled from 'styled-components'
import { observer } from 'mobx-react-lite'

import { useRootStore } from '@contexts/StoreContext'

import Spacing from '@common/Spacing'
import Text from '@common/Text'
import FilmItem from '@components/film/FilmItem'

const FilmList = observer(
  ({ type, title }: { type: string; title: string }) => {
    const { filmStore } = useRootStore()

    let films = []

    switch (type) {
      case 'top10':
        films = filmStore.topRatedFilms
        break
      default:
        films = filmStore.latestFilms
        break
    }

    return (
      <Container>
        <StyledText
          typography="t2"
          color="white">
          {title}
        </StyledText>

        <Spacing size={15} />

        {films.length > 0 ? (
          <StyledList>
            {films.map(film => (
              <FilmItem
                key={film.id}
                film={film}
                removeFilm={filmStore.removeFilm}
              />
            ))}
          </StyledList>
        ) : (
          <Text
            typography="t5"
            color="white">
            No films available. Please add films.
          </Text>
        )}
      </Container>
    )
  }
)

export default FilmList

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`

const StyledList = styled.ul`
  display: flex;
  gap: 7px;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch; /* iOS */

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`

const StyledText = styled(Text)`
  text-transform: capitalize;
`
