import React, { createContext, useContext } from 'react'
import { AppProviderInterface } from '@/models/context/appProvider.interface'

export const AppContext = createContext({} as AppProviderInterface)

export const AppContextProvider = ({ children }: any) => {
  const [direction, setDirection] = React.useState('rtl')

  const changeDirection = (dir: string) => {
    setDirection(dir)
  }

  const sharedState = {
    state: { direction },
    changeDirection,
  }

  React.useEffect(() => {
    document.documentElement.dir = direction
  }, [direction])

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
