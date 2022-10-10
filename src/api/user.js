import { api, setRequestInterceptors, tokenStorageKey } from "./axios"

const authenticate = ({ email = "", password = "" }) => {
  return api.get(`/employees?email=${email}&password=${password}`)
    .then(data => {
      if (!!data?.[0]?.id) {
        localStorage.setItem(tokenStorageKey, "TOKEN_EXAMPLE");
        setRequestInterceptors()
        return data
      }
      throw new Error("404")
    })
}

const userApi = { authenticate }

export default userApi