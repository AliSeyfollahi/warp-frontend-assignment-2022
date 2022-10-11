import { useContext } from "react"
import AuthContext from "./AuthContext"

const useAuthContext = () => {
  const { userDetails, setUserDetails } = useContext(AuthContext)

  return ({ userDetails, setUserDetails })
}

export default useAuthContext