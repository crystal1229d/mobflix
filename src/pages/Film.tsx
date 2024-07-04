import React from 'react'

import { FILM_LIST_TYPES } from '@/constants'
import Layout from '@common/Layout'
import FilmForm from '@components/film/FilmForm'
import FilmList from '@components/film/FilmList'
import Spacing from '@common/Spacing'

export default function FilmPage() {
  return (
    <Layout>
      <FilmForm />
      {FILM_LIST_TYPES.map(({ type, title }) => (
        <React.Fragment key={type}>
          <FilmList
            type={type}
            title={title}
          />
          <Spacing size={50} />
        </React.Fragment>
      ))}
    </Layout>
  )
}
