import { FunctionComponent, ReactNode, createContext, useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../config/firebase'
import { IUser } from '../types/user.types'

interface IUserContext {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  user: IUser
  id: string
}

const defaultId = 'mxHNl3P9My7onSCdgVzm'

export const UserContext = createContext<IUserContext>({} as IUserContext)

const UserProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState({} as IUser)

  const id = localStorage.getItem('id') || defaultId

  useEffect(() => {
    onSnapshot(doc(db, 'users', id), (doc) => {
      setUser({ ...(doc.data() as Omit<IUser, 'docId'>), docId: doc.id })
    })
  }, [])

  const value = { isLoading, setIsLoading, user, id }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider
