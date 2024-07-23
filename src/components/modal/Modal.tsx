import classNames from 'classnames'
import { FunctionComponent } from 'react'
import Button from '../Button'
import { useModal } from '../../hooks/context/useModal'
import { useUserService } from '../../hooks/services/useUserService'
import useGeoLocation from '../../hooks/usePosition'

const Modal: FunctionComponent = () => {
  const { isOpenConfirmCity, setIsConfirmCity, setIsChangeCity } = useModal()
  const { updateUserCity } = useUserService()
  const { city } = useGeoLocation()

  const handleChangeCity = () => {
    setIsConfirmCity(false)
    setIsChangeCity(true)
  }

  const handleConfirm = () => {
    updateUserCity(city)
    setIsConfirmCity(false)
  }
  return (
    <div
      onClick={() => setIsConfirmCity(false)}
      className={classNames(
        ' w-full h-screen fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center duration-300 ease-in-out z-10',
        isOpenConfirmCity
          ? ' bg-opacity-40 bg-black pointer-events-auto'
          : ' bg-opacity-100 pointer-events-none'
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={classNames(
          'backdrop-blur-2xl p-5 bg-white bg-opacity-20 relative z-30 rounded-xl duration-500 ease-in-out',
          isOpenConfirmCity ? 'opacity-100 ' : 'opacity-0 '
        )}
      >
        <p className=" text-2xl">{`Is your city ${city}?`}</p>
        <div className=" flex gap-3 items-end justify-end mt-5">
          <Button title={'Change city'} onClick={handleChangeCity} isActive={false} />
          <Button title={'Confirm'} onClick={handleConfirm} isActive={false} />
        </div>
      </div>
    </div>
  )
}

export default Modal
