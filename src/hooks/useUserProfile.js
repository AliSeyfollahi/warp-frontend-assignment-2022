import { useEffect } from "react"
import { useState } from "react"
import { employeeApi } from "../api"
import { tokenStorageKey } from "../api/axios"

const useUserProfile = (id) => {
  const [userProfile, setUserProfile] = useState()

  useEffect(() => {
    const userId = id ?? localStorage.getItem(tokenStorageKey)
    if (userId)
      employeeApi.getUser(userId).then(data => {
        setUserProfile(data)
      })
  }, [id])

  return [userProfile, setUserProfile]

}

export default useUserProfile