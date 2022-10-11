import React from "react"
import { useEffect } from "react"
import { employeeApi } from "../api"
import { tokenStorageKey } from "../api/axios"
import { useState } from "react";

const init = { userDetails: { id: 0 }, setUserDetails: () => { } }

const AuthContext = React.createContext(init);

export const AuthContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState()

  useEffect(() => {
    const userId = localStorage.getItem(tokenStorageKey)
    if (userId) {
      employeeApi.getUser(userId).then(data => {
        setUserDetails(data)
      })
    }
  }, [setUserDetails])

  return (
    <AuthContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </AuthContext.Provider>)
}

export default AuthContext;