import { Table } from "react-bootstrap";
import { devicesApi, employeeApi } from '../../../api';
import { useTranslation } from "react-i18next"
import { useCallback } from 'react';
import DevicesFilters from './DevicesFilters';
import { useEffect } from 'react';
import { useState } from 'react';
import AddNewFilter from "./AddNewDevice";
import RemoveDeviceButton from "./RemoveDeviceButton";

const Devices = () => {
  const employees = employeeApi.useList()
  const [devices, setDevices] = useState([])

  const { t } = useTranslation()

  const getEmployeeNameById = useCallback((id) => {
    return employees.find(e => e.id === id)?.name
  }, [employees])

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
      <Table striped hover>
        <colgroup>
          <col width={"5%"} />
          <col width={"10%"} />
          <col width={"30%"} />
          <col width={"10%"} />
          <col width={"10%"} />
          <col width={"10%"} />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>{t("brand")}</th>
            <th>{t("serialNumber")}</th>
            <th>{t("product")}</th>
            <th>{t("available")}</th>
            <th>{t("employee")}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {devices.map(device => (
            <tr key={device.serialNumber}>
              <td>{device.id}</td>
              <td>{device.brand}</td>
              <td>{device.serialNumber}</td>
              <td>{device.product}</td>
              <td>{device.available && <>✓</>}</td>
              <td>{getEmployeeNameById(device.employeeId)}</td>
              <td><RemoveDeviceButton id={device.id} onRemove={getDevices}/></td>
            </tr>
          ))}
        </tbody>
      </Table>

      <AddNewFilter onCreate={getDevices} />
    </>
  )
}

export default Devices;