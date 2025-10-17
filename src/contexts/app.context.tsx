import { createContext } from 'vm'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: () => void
}

const initialAppContext: AppContextInterface = {
    isAuthenticated: false
}

export const AppContext = createContext<AppContextInterface>({})
