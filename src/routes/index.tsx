import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from '@components/common/Header'
import HomePage from '@pages/Home'
import FilmPage from '@pages/Film'
import ClubPage from '@pages/Club'
import SearchResultsPage from '@pages/SearchResults'
import SettingPage from '@pages/Setting'

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
        <Route
          path="/search-results"
          element={<SearchResultsPage />}
        />
        <Route
          path="/setting"
          element={<SettingPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}
