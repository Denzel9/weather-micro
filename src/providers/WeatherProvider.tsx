import { createContext, FunctionComponent, ReactNode } from 'react'
import { IDataContext } from '../types/data.interface'
import { useWeatherService } from '../hooks/services/useWeatherData'


export const WeatherContext = createContext<IDataContext>({} as IDataContext)

const WeatherProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const { data, setCity, isLoading } = useWeatherService()
  return (
    <WeatherContext.Provider value={{ setCity, data, isLoading }}>{children}</WeatherContext.Provider>
  )
}

export default WeatherProvider
