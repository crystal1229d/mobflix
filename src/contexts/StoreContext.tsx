import { createContext, useContext, ReactNode } from 'react'
import RootStore from '@stores/RootStore'

let store: RootStore // holds a reference to the store (singleton)

const StoreContext = createContext<RootStore | undefined>(undefined)

export function RootStoreProvider({ children }: { children: ReactNode }) {
  const rootStore = store ?? new RootStore()

  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useRootStore(): RootStore {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return store
}
