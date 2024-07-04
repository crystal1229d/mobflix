import { RootStoreProvider } from '@contexts/StoreContext'
import Router from '@/routes'

function App() {
  return (
    <RootStoreProvider>
      <Router />
    </RootStoreProvider>
  )
}

export default App
