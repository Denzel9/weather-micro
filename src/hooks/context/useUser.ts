import { useContext } from "react"
import { UserContext } from "../../providers/UserProvider"

export const useUser = () => {
    const user = useContext(UserContext)
    
    return {...user}
}