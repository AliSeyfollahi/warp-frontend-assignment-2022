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

const userApi = { authenticate, getUser }

export default userApi