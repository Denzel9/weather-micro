import { FunctionComponent } from 'react'
import Box from './box/Box'
import { LuClock } from 'react-icons/lu'
import { weekDays } from '../helpers/getWeekDay'
import { getMonth } from '../helpers/getMonth'

const Today: FunctionComponent = () => {
  const date = new Date()

  return (
    <Box>
      <div className={'flex items-end flex-col'}>
        <div className={'text-xl font-semibold flex items-center gap-3'}>
          <span className={' ml-2'}>{`${date.getHours().toString().padStart(2, '0')}:${date
            .getMinutes()
            .toString()
            .padStart(2, '0')}`}</span>
          <LuClock />
        </div>
        <p className={'mt-5'}>{`${weekDays[date.getDay()]}, ${date.getDate()} ${
          getMonth[date.getMonth() + 1]
        } ${date.getFullYear()}`}</p>
      </div>
    </Box>
  )
}

export default Today
