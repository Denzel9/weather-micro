import { FunctionComponent, ReactNode } from 'react'

interface StateItemProps {
  icon: ReactNode
  title: string
  value: string 
}

const StateItem: FunctionComponent<StateItemProps> = ({ icon, title, value }) => {
  return (
    <div className={'flex items-end gap-3'}>
      <div className={'text-3xl opacity-50'}>{icon}</div>
      <p className={'block ml-5 mr-8 w-28'}>{title}</p>
      <p>{value}</p>
    </div>
  )
}

export default StateItem
