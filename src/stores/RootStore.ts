import FilmStore from '@stores/FilmStore'
import ClubStore from '@stores/ClubStore'
import UiStore from '@stores/UiStore'

class RootStore {
  filmStore: FilmStore
  clubStore: ClubStore
  uiStore: UiStore

  constructor() {
    this.filmStore = new FilmStore()
    this.clubStore = new ClubStore()
    this.uiStore = new UiStore()
  }
}

export default RootStore
