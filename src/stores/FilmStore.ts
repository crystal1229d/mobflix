import { makeAutoObservable } from 'mobx'
import { IFilm } from '@models/film'
import { FILMS } from '@/mock'

class Film implements IFilm {
  id: string
  title: string
  rating: number
  register_datetime: string

  constructor(
    id: string,
    title: string,
    rating: number,
    register_datetime: string
  ) {
    this.id = id
    this.title = title
    this.rating = rating
    this.register_datetime = register_datetime
    makeAutoObservable(this)
  }
}

class FilmStore {
  films = FILMS // []

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  addFilm(film: Omit<IFilm, 'register_datetime'>) {
    const newFilm = new Film(film.id, film.title, film.rating, new Date() + '')
    this.films.push(newFilm)
  }

  removeFilm(id: string) {
    this.films = this.films.filter(film => film.id !== id)
  }

  get topRatedFilms() {
    return this.films
      .slice()
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 10)
  }

  get latestFilms() {
    return this.films
      .slice()
      .sort(
        (a, b) =>
          new Date(b.register_datetime).getTime() -
          new Date(a.register_datetime).getTime()
      )
  }

  searchFilms(keyword: string) {
    return this.films.filter(film =>
      film.title.toLowerCase().includes(keyword.toLowerCase())
    )
  }
}

export default FilmStore
