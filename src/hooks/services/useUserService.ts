import { updateDoc, doc, arrayUnion, arrayRemove } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { useUser } from '../context/useUser'

export const useUserService = () => {
  const { user, isLoading, setIsLoading } = useUser()

  const updateUserCity = async (city: string) => {
    setIsLoading(true)
    try {
      await updateDoc(doc(db, 'users', user?.docId), {
        'weather.city': city,
      })
    } catch (error: any) {
      console.log('Error update:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateFavoriteCity = async (city: string) => {
    setIsLoading(true)
    try {
      await updateDoc(doc(db, 'users', user?.docId), {
        'weather.favorites': user?.weather?.favorites?.includes(city) ? arrayRemove(city) : arrayUnion(city),
      })
    } catch (error: any) {
      console.log('Error update:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateUserPreviousSearch = async (city: string) => {
    setIsLoading(true)

    try {
      await updateDoc(doc(db, 'users', user?.docId), {
        'weather.previousSearch': user?.weather?.previousSearch?.includes(city)
          ? arrayRemove(city)
          : arrayUnion(city),
      })
    } catch (error: any) {
      console.log('Error update:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    updateUserCity,
    updateUserPreviousSearch,
    updateFavoriteCity,
  }
}
