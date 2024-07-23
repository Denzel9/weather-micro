import { FunctionComponent } from 'react'
import Button from '../../Button'
import { TITLE_MODE } from '../FullInformation'

interface NavigationProps {
    titleMode: TITLE_MODE
    setTitleMode: (titleMode: TITLE_MODE) => void
}

const Navigation: FunctionComponent<NavigationProps> = ({titleMode,setTitleMode}) => {
  return (
    <div className={'flex gap-14 font-bold border-b border-white border-opacity-20 pb-5'}>
      <Button
        title={'Today`s forecast'}
        onClick={() => setTitleMode(TITLE_MODE.Today)}
        isActive={titleMode === 'Today&apos;s forecast'}
      />
      <Button
        title={'Hourly forecast'}
        onClick={() => setTitleMode(TITLE_MODE.Hourly)}
        isActive={titleMode === 'Hourly forecast'}
      />
    </div>
  )
}

export default Navigation
