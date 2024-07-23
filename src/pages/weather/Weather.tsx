import { FunctionComponent, useEffect } from 'react'
import '../../index.scss'
import './style.scss'
import classNames from 'classnames'
import ShortInformation from '../../components/ShortInformation'
import Today from '../../components/Today'
import FullInformation from '../../components/full-information/FullInformation'
import { useModal } from '../../hooks/context/useModal'
import { useUser } from '../../hooks/context/useUser'
import { useWeather } from '../../hooks/context/useWeather'
import useGeoLocation from '../../hooks/usePosition'

const Weather: FunctionComponent = () => {
  const { data } = useWeather()
  const { user } = useUser()
  const { setIsConfirmCity } = useModal()


  useEffect(() => {
    if (user?.weather?.city.length) {
      setIsConfirmCity(true)
    } else return
  }, [])

  return (
    <div
      className={classNames(
        'wrapper',
        "flex p-5 flex-col justify-between bg-[url('https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover p-5;"
      )}
    >
      <div className={'flex justify-between'}>
        <ShortInformation
          temp_c={data?.weather?.current?.temp_c}
          temp_f={data?.weather?.current?.temp_f}
          condition={data?.weather?.current?.condition?.text}
          city={data?.weather?.location?.name}
          country={data?.weather?.location?.tz_id}
        />
        <Today />
      </div>
      <FullInformation
        weather={data?.oneDays?.dayWeather?.day}
        todayWeather={data?.oneDays?.dayWeather?.hour}
      />
    </div>
  )
}

export default Weather
