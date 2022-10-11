import { Table } from "react-bootstrap";
import { devicesApi, employeeApi } from '../../../api';
import { useTranslation } from "react-i18next"
import { useEffect } from 'react';
import { useState } from 'react';
import ShowDevicesButton from "./ShowDevicesButton";
import { useCallback } from "react";

const Employees = () => {
  const [employees, setEmployees] = useState([])
  const devices = devicesApi.useList()

  const { t } = useTranslation()

  const getEmployees = () => {
    employeeApi.list().then((data) => {
      setEmployees(data)
    })
  }

  const getEmpDevices = useCallback((id) => devices.filter(d => d.employeeId === id), [devices])

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <>
      <Table striped hover responsive>
        <colgroup>
          <col width={"5%"} />
          <col width={"25%"} />
          <col width={"20%"} />
          <col width={"25%"} />
          <col width={"25%"} />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>{t("name")}</th>
            <th>{t("role")}</th>
            <th>{t("email")}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.role}</td>
              <td>{emp.email}</td>
              <td><ShowDevicesButton devices={getEmpDevices(emp.id)} /></td>
            </tr>
          ))}
        </tbody>
      </Table>

    </>
  )
}

export default Employees;