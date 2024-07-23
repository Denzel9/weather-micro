import { FunctionComponent, useState } from 'react'
import Box from '../box/Box'
import Today from './today/Today'
import Forecast from './forecast/Forecast'

interface FullInformationProps {
  weather: any
  todayWeather: any
}

export enum TITLE_MODE {
  Today = 'Today&apos;s forecast',
  Hourly = 'Hourly forecast',
}



const FullInformation: FunctionComponent<FullInformationProps> = ({ weather, todayWeather }) => {
  const [titleMode, setTitleMode] = useState<TITLE_MODE>(TITLE_MODE.Today)

  return (
    <Box style="flex gap-5">
      <Forecast titleMode={titleMode} setTitleMode={setTitleMode} weather={weather} todayWeather={todayWeather}/>
      <Today todayWeather={todayWeather} />
    </Box>
  )
}

export default FullInformation
