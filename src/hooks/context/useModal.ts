import { useContext } from "react"
import { ModalContext } from "../../providers/ModalProvider"

export const useModal = () => {
    const modal = useContext(ModalContext)
    return {...modal}
}