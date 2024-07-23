import { FunctionComponent, useState } from 'react'
import Box from './box/Box'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { IoLocationSharp } from 'react-icons/io5'
import classNames from 'classnames'
import { useModal } from '../hooks/context/useModal'
import Button from './Button'

interface ShortInformationProps {
  temp_c: number
  temp_f: number
  condition: string
  city: string
  country: string
}

const ShortInformation: FunctionComponent<ShortInformationProps> = ({
  temp_c,
  temp_f,
  city,
  condition,
  country,
}) => {
  const [currentTempMode, setCurrentTempMode] = useState<'c' | 'f'>('c')
  const { isOpenChangeCity, setIsChangeCity } = useModal()
  return (
    <Box>
      <div className={'flex gap-5'}>
        <div className={'flex'}>
          <p className={'text-5xl w-28'}>{currentTempMode === 'c' ? temp_c : temp_f}°</p>
          <div className={'flex flex-col ml-3'}>
            <Button
              title={'C'}
              onClick={() => setCurrentTempMode('c')}
              isActive={currentTempMode === 'c'}
            />
            <Button
              title={'F'}
              onClick={() => setCurrentTempMode('f')}
              isActive={currentTempMode === 'f'}
            />
          </div>
        </div>
        <div className={'flex flex-col items-center'}>
          <TiWeatherPartlySunny size={30} />
          <p>{condition}</p>
        </div>
      </div>

      <div className={'mt-8'}>
        <p className={'text-2xl font-semibold'}>{city}</p>
        <p className={'text-xl font-light opacity-50'}>{country}</p>
      </div>
      <Button
        title={'Change location'}
        icon={<IoLocationSharp size={20} />}
        onClick={() => setIsChangeCity(!isOpenChangeCity)}
        style='mt-8'
      />
    </Box>
  )
}

export default ShortInformation
