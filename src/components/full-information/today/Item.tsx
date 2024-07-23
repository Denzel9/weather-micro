import { FunctionComponent, ReactNode } from 'react'

interface ItemProps {
  title: string
  icon: ReactNode
  value: number
}

const Item: FunctionComponent<ItemProps> = ({ title, value, icon }) => {
  return (
    <div className='bg-black bg-opacity-50 flex flex-col items-center w-1/3 py-5 rounded-xl'>
      {icon}
      <p>{title}</p>
      <div className={'flex'}>
        <p>{value}</p>
        <p>°c</p>
      </div>
    </div>
  )
}

export default Item
