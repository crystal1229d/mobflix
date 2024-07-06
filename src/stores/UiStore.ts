import { makeAutoObservable } from 'mobx'

class UiStore {
  darkMode: boolean = true
  language: 'en' | 'ko' = 'en'
  ratingStyle: 'number' | 'star' = 'star'

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  toggleDarkMode(value?: boolean) {
    this.darkMode = value !== undefined ? value : !this.darkMode
  }

  setLanguage(language: 'en' | 'ko') {
    this.language = language
  }

  setRatingStyle(style: 'number' | 'star') {
    this.ratingStyle = style
  }
}

export default UiStore
