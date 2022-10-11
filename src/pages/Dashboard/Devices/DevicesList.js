import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next"
import { useCallback } from 'react';
import RemoveDeviceButton from "./RemoveDeviceButton";
import AddEditDeviceButton from "./AddEditDeviceButton";

const DevicesList = ({ devices = [], employees = [], reload = () => { }, editable = true }) => {

  const { t } = useTranslation()

  const getEmployeeNameById = useCallback((id) => {
    return employees.find(e => e.id === id)?.name
  }, [employees])

  return <Table striped hover responsive>
    <colgroup>
      <col width={"5%"} />
      <col width={"10%"} />
      <col width={"30%"} />
      <col width={"10%"} />
      <col width={"10%"} />
      {editable &&
        <>
          <col width={"15%"} />
          <col width={"20%"} />
        </>
      }
    </colgroup>
    <thead>
      <tr>
        <th>#</th>
        <th>{t("brand")}</th>
        <th>{t("serialNumber")}</th>
        <th>{t("product")}</th>
        <th>{t("available")}</th>
        {editable &&
          <>
            <th>{t("employee")}</th>
            <th></th>
          </>
        }
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
          {
            editable && <>
              <td>{getEmployeeNameById(device.employeeId)}</td>
              <td>
                <div className="d-flex">
                  <div className="mx-2">
                    <AddEditDeviceButton data={device} onAddEdit={reload} employees={employees} />
                  </div>
                  <RemoveDeviceButton id={device.id} onRemove={reload} />
                </div>
              </td>
            </>
          }
        </tr>
      ))}
    </tbody>
  </Table>
}
export default DevicesList