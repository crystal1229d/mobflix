import { makeAutoObservable } from 'mobx'

class UiStore {
  darkMode: boolean = true
  language: 'en' | 'ko' = 'en'

  constructor() {
    makeAutoObservable(this)
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode
  }

  setLanguage(language: 'en' | 'ko') {
    this.language = language
  }
}

export default UiStore
