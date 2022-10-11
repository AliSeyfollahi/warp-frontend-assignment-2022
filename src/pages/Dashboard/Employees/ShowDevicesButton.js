import { useState } from "react";
import { Modal, Button } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import DevicesList from "../Devices/DevicesList";

const ShowDevicesButton = ({ devices = [] }) => {
  const { t } = useTranslation()
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <>
      <Button variant="outline-success" type="button" onClick={handleShow} size="sm">
        {t("showDevices")}
        {!!devices.length && <>({devices.length})</>}
      </Button>

      <Modal show={show} onHide={handleShow} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{t("showDevices")}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <DevicesList devices={devices} editable={false}/>
        </Modal.Body>

      </Modal>
    </>
  )
}
export default ShowDevicesButton