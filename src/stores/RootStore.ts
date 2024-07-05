import { makeAutoObservable } from 'mobx'

import FilmStore from '@stores/FilmStore'
import ClubStore from '@stores/ClubStore'
import UiStore from '@stores/UiStore'

import { IFilm } from '@models/film'
import { IMember } from '@models/member'
import { SearchFilter } from '@models/search-filter'

class RootStore {
  filmStore: FilmStore
  clubStore: ClubStore
  uiStore: UiStore
  searchResults: (IFilm | IMember)[] = []
  searchFilter: SearchFilter = 'all'
  searchKeyword: string = ''

  constructor() {
    this.filmStore = new FilmStore()
    this.clubStore = new ClubStore()
    this.uiStore = new UiStore()
    makeAutoObservable(this, {}, { autoBind: true })
  }

  search(keyword: string, filter: SearchFilter) {
    this.setSearchFilter(filter)
    this.setSearchKeyword(keyword)
    const results: { films: IFilm[]; members: IMember[] } = {
      films: [],
      members: []
    }

    if (filter === 'films' || filter === 'all') {
      results.films = this.filmStore.searchFilms(keyword)
    }

    if (filter === 'club' || filter === 'all') {
      results.members = this.clubStore.searchMembers(keyword)
    }

    this.setSearchResults([...results.films, ...results.members])
  }

  setSearchResults(results: (IFilm | IMember)[]) {
    this.searchResults = results
  }

  setSearchFilter(filter: SearchFilter) {
    this.searchFilter = filter
  }

  setSearchKeyword(keyword: string) {
    this.searchKeyword = keyword
  }
}

export default RootStore
