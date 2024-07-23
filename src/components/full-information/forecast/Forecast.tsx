import { FunctionComponent } from 'react'
import StateItem from '../../state-item/StateItem'
import { TITLE_MODE } from '../FullInformation'
import { IWeather } from '../../../types/user.types'
import { CgOverflow } from 'react-icons/cg'
import { FaTemperatureArrowUp, FaTemperatureArrowDown, FaTemperatureEmpty } from 'react-icons/fa6'
import { FiWind } from 'react-icons/fi'
import { IoRainy } from 'react-icons/io5'
import Navigation from './Navigation'
import Charts from '../../chart/Chart'

interface ForecastProps {
  titleMode: TITLE_MODE
  setTitleMode: (titleMode: TITLE_MODE) => void
  weather: IWeather
  todayWeather: any[]
}

const items = [
  <FaTemperatureArrowUp />,
  <FaTemperatureArrowDown />,
  <FaTemperatureEmpty />,
  <FiWind />,
  <IoRainy />,
  <CgOverflow />,
]

const Forecast: FunctionComponent<ForecastProps> = ({
  titleMode,
  setTitleMode,
  weather,
  todayWeather,
}) => {
  const arrWeather =
    weather &&
    Object.entries(weather)?.map((el) => {
      return { name: el[0], value: el[1] }
    })

  const filterWeather =
    arrWeather &&
    arrWeather
      ?.filter((el) => {
        if (
          el.name === 'maxtemp_c' ||
          el.name === 'mintemp_c' ||
          el.name === 'avgtemp_c' ||
          el.name === 'maxwind_kph' ||
          el.name === 'daily_chance_of_rain' ||
          el.name === 'uv'
        ) {
          return el
        }
      })
      .map((elem, i) => ({ ...elem, icon: items[i] }))

  const localeWeather = filterWeather?.map((el) => {
    if (el.name === 'maxtemp_c') {
      return { ...el, name: 'Max. temp', value: el.value.toString() + '°' }
    }
    if (el.name === 'mintemp_c') {
      return { ...el, name: 'Min. temp', value: el.value.toString() + '°' }
    }
    if (el.name === 'avgtemp_c') {
      return { ...el, name: 'Avg. temp', value: el.value.toString() + '°' }
    }
    if (el.name === 'maxwind_kph') {
      return { ...el, name: 'Max. wind', value: el.value + 'kph' }
    }
    if (el.name === 'daily_chance_of_rain') {
      return { ...el, name: 'Rain chance', value: el.value + '%' }
    }
    if (el.name === 'uv') {
      return { ...el, name: 'UV', value: el.value.toString() }
    }
  })

  const data = todayWeather?.map((el) => ({ uv: el?.temp_c, name: el?.time?.split(' ')[1] }))
  return (
    <div className={'w-3/5'}>
      <Navigation titleMode={titleMode} setTitleMode={setTitleMode} />
      {titleMode === TITLE_MODE.Today && (
        <div className={'grid grid-cols-2 mt-5 gap-5'}>
          {localeWeather?.map((el, i) => (
            <StateItem key={i} icon={el.icon} title={el.name} value={el.value} />
          ))}
        </div>
      )}
      {titleMode === TITLE_MODE.Hourly && (
        <div className={'grid grid-cols-2 mt-5 gap-5'}>
          <Charts data={data} />
        </div>
      )}
    </div>
  )
}

export default Forecast
