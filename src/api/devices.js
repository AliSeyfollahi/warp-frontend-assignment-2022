import { useEffect } from "react"
import { useState } from "react"
import urlHelper from "../common/utils/urlHelper"
import { api } from "./axios"

const create = (body = {}) => {
  return api.post("/devices", body)
}

const update = (body = {}) => {
  return api.put(`/devices/${body.id}`, body)
}

const remove = (id = 0) => {
  return api.delete(`/devices/${id}`)
}

const list = (filter = {}) => {
  return api.get(`/devices?${urlHelper.objectToQueryParams(filter)}`)
}

const useList = () => {
  const [devices, setDevices] = useState([])
  useEffect(() => {
    list().then(data => setDevices(data))
  }, [])
  return devices
}

const devicesApi = { list, useList, create, remove, update }

export default devicesApi