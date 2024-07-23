import classNames from 'classnames'
import { FunctionComponent, PropsWithChildren } from 'react'

interface BoxProps {
  style?: string
}

const Box: FunctionComponent<PropsWithChildren<BoxProps>> = ({ children, style }) => {
  return (
    <div
      className={classNames(
        ' rounded-xl h-fit text-white bg-white bg-opacity-5 backdrop-blur-md p-5',
        style
      )}
    >
      {children}
    </div>
  )
}

export default Box
