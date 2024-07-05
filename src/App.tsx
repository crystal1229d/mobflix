import { RootStoreProvider } from '@contexts/StoreContext'
import Router from '@/routes'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <RootStoreProvider>
      <Router />
      <Outlet />
    </RootStoreProvider>
  )
}

export default App
