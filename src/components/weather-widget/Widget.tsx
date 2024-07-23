import { FunctionComponent, useEffect, useState } from 'react'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { Radio } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { IData } from '../../types/data.interface'

const Widget: FunctionComponent = () => {
  const [weather, setWeather] = useState<IData>()

  const getSearch = (city: string) => {
    try {
      const weather = axios.get<IData>('https://weatherapi-com.p.rapidapi.com/forecast.json', {
        params: {
          q: city,
          days: '1',
          lang: 'EN',
        },
        headers: {
          'X-RapidAPI-Key': '1fd63b54eemshab0fee48e90e76ap1bd2ccjsn955168f95359',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        },
      })
      return weather
    } catch (error) {
      console.log(error)
    }
  }
  window.addEventListener('storage', () => {
    const city = localStorage.getItem('city')
    if (city !== 'undefined') {
      getSearch(city).then((res) => setWeather(res?.data))
      console.log(city)
    }
  })

  return (
    <Link
      to={'/weather'}
      className=" bg-dark w-24 h-10 rounded-xl p-1 flex items-center justify-center"
    >
      {weather?.current?.temp_c ? (
        <div className=" flex items-center gap-2">
          <TiWeatherPartlySunny size={20} />
          <p>{weather?.current?.temp_c}°C</p>
        </div>
      ) : (
        <Radio
          visible={true}
          height="30"
          width="30"
          ariaLabel="radio-loading"
          wrapperStyle={{ color: '#4fa94d' }}
        />
      )}
    </Link>
  )
}

export default Widget
