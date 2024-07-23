import classNames from 'classnames'
import { FunctionComponent, PropsWithChildren, ReactNode } from 'react'
import { useModal } from '../../hooks/context/useModal'

interface ISidebarSheet {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const SidebarSheet: FunctionComponent<PropsWithChildren<ISidebarSheet>> = ({
  children,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className={classNames(
        ' w-full h-screen fixed top-0 left-0 right-0 bottom-0 duration-300 ease-in-out z-10',
        isOpen
          ? ' bg-opacity-40 bg-black pointer-events-auto'
          : ' bg-opacity-100 pointer-events-none'
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={classNames(
          ' absolute top-0 right-0 bottom-0 backdrop-blur-2xl p-5 w-72 h-full text-white bg-white bg-opacity-20 z-30 rounded-tl-xl rounded-bl-xl duration-500 ease-in-out',
          isOpen ? 'opacity-100 translate-x-0 ' : 'opacity-0 translate-x-80'
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default SidebarSheet
