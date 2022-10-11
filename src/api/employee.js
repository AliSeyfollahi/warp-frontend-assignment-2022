import { useEffect } from "react";
import { useState } from "react";
import { api, setRequestInterceptors, tokenStorageKey } from "./axios"

const authenticate = ({ email = "", password = "" }) => {
  return api.get(`/employees?email=${email}&password=${password}`)
    .then(data => {
      if (!!data?.[0]?.id) {
        localStorage.setItem(tokenStorageKey, data[0].id);
        setRequestInterceptors()
        return data[0]
      }
      throw new Error("404")
    })
}

const getUser = (id = 0) => {
  return api.get(`/employees?id=${id}`)
    .then(data => {
      if (!!data?.[0]?.id) {
        return data[0]
      }
      throw new Error("404")
    })
}

const list = (id = 0) => {
  return api.get("/employees")
}

const useList = () => {
  const [employees, setEmployees] = useState([])
  useEffect(() => {
    list().then(data => setEmployees(data))
  }, [])
  return employees
}

const employeeApi = { authenticate, getUser, useList }

export default employeeApi