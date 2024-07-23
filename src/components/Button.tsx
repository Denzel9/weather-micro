import classNames from 'classnames'
import { FunctionComponent, ReactNode } from 'react'

interface ButtonProps {
  title?: string
  onClick: () => void
  isActive?: boolean
  icon?: ReactNode
  style?: string
}

const Button: FunctionComponent<ButtonProps> = ({
  title,
  onClick,
  isActive = false,
  icon,
  style,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        ' flex items-center gap-3 duration-300 ease-in-out hover:opacity-100',
        isActive ? 'opacity-100' : 'opacity-50 ',
        style
      )}
    >
      {icon} <p>{title}</p>
    </button>
  )
}

export default Button
