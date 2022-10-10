import React from "react"
import { useState } from "react";

const init = {
  user: null
}

const AuthContext = React.createContext(init);

export const AuthContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState();

  return (
    <AuthContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </AuthContext.Provider>)
}

export default AuthContext;