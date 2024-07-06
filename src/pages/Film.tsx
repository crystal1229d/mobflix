import React from 'react'

import { FILM_LIST_TYPES } from '@/constants'
import Layout from '@common/Layout'
import FilmForm from '@components/film/FilmForm'
import FilmList from '@components/film/FilmList'
import Spacing from '@common/Spacing'
import MemberList from '@components/club/MemberList'

export default function FilmPage() {
  return (
    <Layout>
      <FilmForm />

      <Spacing size={30} />

      <MemberList />

      <Spacing size={20} />

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
