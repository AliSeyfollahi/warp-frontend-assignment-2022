import { Table } from "react-bootstrap";
import { employeeApi } from '../../../api';
import { useTranslation } from "react-i18next"
import { useEffect } from 'react';
import { useState } from 'react';

const Employees = () => {
  const [employees, setEmployees] = useState([])

  const { t } = useTranslation()

  const getEmployees = () => {
    employeeApi.list().then((data) => {
      setEmployees(data)
    })
  }

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <>
      <Table striped hover>
        <colgroup>
          <col width={"5%"} />
          <col width={"15%"} />
          <col width={"20%"} />
          <col width={"25%"} />
          <col width={"20%"} />
          <col width={"15%"} />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>{t("name")}</th>
            <th>{t("role")}</th>
            <th>{t("email")}</th>
            <th>{t("devices")}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map(device => (
            <tr key={device.id}>
              <td>{device.id}</td>
              <td>{device.name}</td>
              <td>{device.role}</td>
              <td>{device.email}</td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>

    </>
  )
}

export default Employees;