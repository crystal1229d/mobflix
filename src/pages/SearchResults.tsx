import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import { useRootStore } from '@contexts/StoreContext'

import Layout from '@common/Layout'
import Text from '@common/Text'
import Spacing from '@common/Spacing'

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
              <Text
                typography="t4"
                color="white">
                {result.id}
              </Text>
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
`

export default SearchResultsPage
