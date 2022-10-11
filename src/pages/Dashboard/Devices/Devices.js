import { devicesApi, employeeApi } from '../../../api';
import DevicesFilters from './DevicesFilters';
import { useEffect } from 'react';
import { useState } from 'react';
import AddEditDeviceButton from "./AddEditDeviceButton";
import DevicesList from "./DevicesList";

const Devices = () => {
  const [devices, setDevices] = useState([])
  const employees = employeeApi.useList()

  const getDevices = (filter) => {
    devicesApi.list(filter).then((data) => {
      setDevices(data)
    })
  }

  const handleFilter = (filter) => {
    getDevices(filter)
  }

  useEffect(() => {
    getDevices()
  }, [])

  return (
    <>
      <DevicesFilters onFilter={handleFilter} />
      <DevicesList devices={devices} reload={getDevices} employees={employees} />
      <AddEditDeviceButton onAddEdit={getDevices} employees={employees} />
    </>
  )
}

export default Devices;