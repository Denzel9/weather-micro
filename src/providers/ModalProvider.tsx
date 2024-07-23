import { FunctionComponent, ReactNode, createContext, useState } from 'react'

interface IModalContext {
  isOpenChangeCity: boolean
  setIsChangeCity: (isOpenChangeCity: boolean) => void
  isOpenConfirmCity: boolean
  setIsConfirmCity: (isOpenConfirmCity: boolean) => void
  isOpenMenu: boolean
  setIsOpenMenu: (isOpenMenu: boolean) => void
}

export const ModalContext = createContext({} as IModalContext)

const ModalProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [isOpenChangeCity, setIsChangeCity] = useState(false)
  const [isOpenConfirmCity, setIsConfirmCity] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        isOpenChangeCity,
        setIsChangeCity,
        isOpenConfirmCity,
        setIsConfirmCity,
        isOpenMenu,
        setIsOpenMenu,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
