import { FunctionComponent } from 'react'
import SidebarSheet from './Sidebar'
import { useModal } from '../../hooks/context/useModal'

interface MenuProps {}

const Menu: FunctionComponent<MenuProps> = () => {
  const { isOpenMenu, setIsOpenMenu } = useModal()
  return (
    <SidebarSheet isOpen={isOpenMenu} setIsOpen={setIsOpenMenu}>
      <h1>Хотел и тут что то сделать, но не придумал, да и к тому же было лень...</h1>
    </SidebarSheet>
  )
}

export default Menu
