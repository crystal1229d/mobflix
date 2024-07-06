import React, { useState } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { useRootStore } from '@contexts/StoreContext'
import ButtonSearch from '@common/ButtonSearch'
import { SEARCH_FILTER } from '@/constants'
import { SearchFilter } from '@models/search-filter'

const Search = observer(() => {
  const {
    search,
    searchFilter: globalFilter,
    setSearchFilter,
    searchKeyword: globalKeyword,
    setSearchKeyword
  } = useRootStore()
  const navigate = useNavigate()

  // SearchResults 페이지 내에서 Search 컴포넌트 내의 keyword, filter 조작 시 텍스트 변경되지 않게끔 local state 로 관리
  const [filter, setFilter] = useState<SearchFilter>(globalFilter)
  const [keyword, setKeyword] = useState(globalKeyword)

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as SearchFilter)
  }

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const handleSearch = () => {
    setSearchFilter(filter)
    setSearchKeyword(keyword)

    search(keyword, filter)

    navigate('/search-results')
  }

  return (
    <SearchContainer>
      <FilterSelect
        value={filter}
        onChange={handleFilterChange}>
        {SEARCH_FILTER.map(({ type, label }) => (
          <option
            key={type}
            value={type}>
            {label}
          </option>
        ))}
      </FilterSelect>
      <SearchInput
        type="text"
        value={keyword}
        onChange={handleKeywordChange}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
      />
      <ButtonSearch onClick={handleSearch} />
    </SearchContainer>
  )
})

export default Search

const SearchContainer = styled.div`
  margin-left: auto;
  margin-right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`

const FilterSelect = styled.select`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #555;
  background-color: #222;
  color: #fff;
  cursor: pointer;
  text-transform: capitalize;
`

const SearchInput = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #555;
  background-color: #222;
  color: #fff;
`
