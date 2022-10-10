import React from "react"
import useUserProfile from "../hooks/useUserProfile";

const init = { userDetails: { id: 0 }, setUserDetails: () => { } }

const AuthContext = React.createContext(init);

export const AuthContextProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useUserProfile()

  return (
    <AuthContext.Provider value={{ userDetails: userProfile, setUserDetails: setUserProfile }}>
      {children}
    </AuthContext.Provider>)
}

export default AuthContext;