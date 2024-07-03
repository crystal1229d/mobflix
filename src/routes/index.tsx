import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from '@components/common/Header'
import HomePage from '@pages/Home'
import FilmPage from '@pages/Film'
import ClubPage from '@pages/Club'

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/films"
          element={<FilmPage />}
        />
        <Route
          path="/club"
          element={<ClubPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}
