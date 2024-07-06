import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import { useRootStore } from '@contexts/StoreContext'
import { IFilm } from '@models/film'
import { IMember } from '@models/member'

import Layout from '@common/Layout'
import Text from '@common/Text'
import Spacing from '@common/Spacing'
import Badge from '@common/Badge'

const SearchResultsPage = observer(() => {
  const { searchResults, searchFilter, searchKeyword } = useRootStore()

  return (
    <ResultsLayout>
      <Spacing size={50} />
      <Text
        typography="t3"
        color="white">
        Search Results for "{searchKeyword}" in "{searchFilter}"
      </Text>
      <Spacing size={20} />
      {searchResults.length > 0 ? (
        <ResultsList>
          {searchResults.map(result => (
            <li key={result.id}>
              {isFilm(result) ? (
                <>
                  <Badge
                    label="Film"
                    color="#3498db"
                  />
                  <Text
                    typography="t4"
                    color="white">
                    {result.title}, Rating: {result.rating}
                  </Text>
                </>
              ) : (
                <>
                  <Badge
                    label="Club"
                    color="#e74c3c"
                  />
                  <Text
                    typography="t4"
                    color="white">
                    {result.name}, Age: {result.age}, Address: {result.address}
                  </Text>
                </>
              )}
            </li>
          ))}
        </ResultsList>
      ) : (
        <Text
          typography="t3"
          color="white">
          No results found
        </Text>
      )}
    </ResultsLayout>
  )
})

const ResultsLayout = styled(Layout)`
  height: auto;
`

const ResultsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
`

function isFilm(result: IFilm | IMember): result is IFilm {
  return (result as IFilm).title !== undefined
}

export default SearchResultsPage
