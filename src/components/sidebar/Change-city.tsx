import { FunctionComponent, useEffect, useState } from 'react'
import SidebarSheet from './Sidebar'
import { useModal } from '../../hooks/context/useModal'
import { useWeather } from '../../hooks/context/useWeather'
import { useUserService } from '../../hooks/services/useUserService'
import { useUser } from '../../hooks/context/useUser'
import Button from '../Button'
import { FaRegHeart } from 'react-icons/fa'
import classNames from 'classnames'
import { setUpperCaseFirstLetter } from '../../helpers/setUpperCaseFirstLetter'

const ChangeCity: FunctionComponent = () => {
  const { isOpenChangeCity, setIsChangeCity } = useModal()
  const [cityName, setCityName] = useState('')
  const { setCity } = useWeather()
  const { updateUserPreviousSearch, updateFavoriteCity } = useUserService()
  const { user } = useUser()

  useEffect(() => localStorage.setItem('city', user?.weather?.city), [])

  const changeCity = (city: string) => {
    setCity(city)
    localStorage.setItem('city', city)
    window.dispatchEvent(new Event('storage'))
    updateUserPreviousSearch(city)
    setIsChangeCity(false)
  }

  const selectCity = (city: string) => {
    setCity(city)
    localStorage.setItem('city', city)
    window.dispatchEvent(new Event('storage'))
    setIsChangeCity(false)
  }

  return (
    <SidebarSheet isOpen={isOpenChangeCity} setIsOpen={setIsChangeCity}>
      <h2 className=" text-2xl">Change city</h2>
      <div className=" flex flex-col items-end">
        <input
          className=" py-1 bg-transparent outline-none border-b border-white/50 w-full"
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button
          onClick={() => changeCity(cityName)}
          className=" mt-3 opacity-50 hover:opacity-100 duration-300 ease-in-out"
        >
          Search
        </button>
      </div>

      <div className=" mt-5">
        <h2 className=" bloc mb-3">Favorites</h2>
        {user?.weather?.favorites?.map((el) => (
          <div key={el} className=" flex items-center justify-between">
            <Button title={setUpperCaseFirstLetter(el)} isActive onClick={() => selectCity(el)} />
            <Button
              icon={
                <FaRegHeart
                  className={classNames(
                    user?.weather?.favorites?.includes(el) ? ' text-red-800' : ''
                  )}
                />
              }
              onClick={() => updateFavoriteCity(el)}
              isActive
            />
          </div>
        ))}
      </div>

      <div className=" mt-5">
        <h2 className=" bloc mb-3">Previous search</h2>
        {user?.weather?.previousSearch?.map((el) => {
          if (!user?.weather?.favorites?.includes(el))
            return (
              <div key={el} className=" flex items-center justify-between">
                <Button
                  title={setUpperCaseFirstLetter(el)}
                  isActive
                  onClick={() => selectCity(el)}
                />
                <Button
                  icon={
                    <FaRegHeart
                      className={classNames(
                        user?.weather?.favorites?.includes(el) ? ' text-red-800' : ''
                      )}
                    />
                  }
                  onClick={() => updateFavoriteCity(el)}
                  isActive
                />
              </div>
            )
        })}
      </div>
    </SidebarSheet>
  )
}

export default ChangeCity
