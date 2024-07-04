import React from 'react'

import MemberList from '@components/club/MemberList'
import Layout from '@common/Layout'
import Spacing from '@common/Spacing'
import FilmList from '@components/film/FilmList'
import { FILM_LIST_TYPES } from '@/constants'

export default function HomePage() {
  return (
    <Layout>
      <Spacing size={20} />
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
