import { FunctionComponent } from 'react'
import { IoMdSettings } from 'react-icons/io'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import Item from './Item'
import Button from '../../Button'
import { useModal } from '../../../hooks/context/useModal'

interface TodayProps {
  todayWeather: any[]
}

const getTitle = (i: number) => {
  if (i === 8) return 'Morning'
  else if (i === 13) return 'Afternoon'
  else if (i === 20) return 'Evening'
}

const Today: FunctionComponent<TodayProps> = ({ todayWeather }) => {
  const {setIsOpenMenu} = useModal()
  return (
    <div className={'w-2/5'}>
      <div className={'flex justify-between font-bold'}>
        <span>Today&apos;s</span>
        <Button icon={<IoMdSettings size={30} />} onClick={() => setIsOpenMenu(true)} />
      </div>
      <div className={'w-full flex gap-3 mt-10'}>
        {todayWeather?.map((el, i) => {
          if (i === 8 || i === 13 || i === 20)
            return (
              <Item
                key={el?.time}
                title={getTitle(i)}
                icon={<TiWeatherPartlySunny size={30} />}
                value={el?.temp_c}
              />
            )
        })}
      </div>
    </div>
  )
}

export default Today
