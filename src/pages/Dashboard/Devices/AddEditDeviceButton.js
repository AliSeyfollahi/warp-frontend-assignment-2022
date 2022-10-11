import { useState } from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { devicesApi } from "../../../api";
import { getFormData } from "../../../common/utils";
import { pruneData } from "./deviceHelper";

const AddEditDeviceButton = ({ data = {}, employees = [], onAddEdit = () => { } }) => {
  const { t } = useTranslation()
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  const handleSubmit = (e) => {
    e.preventDefault()
    const formEl = e.currentTarget
    data = { ...data, ...pruneData(getFormData(formEl)) }
    if (data?.id) {
      devicesApi.update(data).then(() => {
        onAddEdit()
        handleShow();
        formEl.reset()
      })
    } else {
      devicesApi.create(data).then(() => {
        onAddEdit()
        handleShow();
        formEl.reset()
      })
    }

  }

  return (
    <>
      {data.id &&
        <Button variant="warning" type="button" onClick={handleShow} size="sm">
          {t("edit")}
        </Button>
      }
      {!data.id &&
        <Button variant="success" type="button" onClick={handleShow} size="lg" className="mt-5">
          {t("addNewDevice")}
        </Button>
      }

      <Modal show={show} onHide={handleShow} size="lg" centered>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>{t("addNewDevice")}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row className="align-items-center">
              <Col xs={12} lg={6}>
                <Form.Group className="py-2" controlId="formBasicBrand">
                  <Form.Label>{t("brand")}</Form.Label>
                  <Form.Control name="brand" type="text" placeholder={t("brand")} autoFocus required defaultValue={data.brand} />
                </Form.Group>
              </Col>
              <Col xs={12} lg={6}>
                <Form.Group className="py-2" controlId="formBasicProduct">
                  <Form.Label>{t("product")}</Form.Label>
                  <Form.Control name="product" type="text" placeholder={t("product")} required defaultValue={data.product} />
                </Form.Group>
              </Col>
              <Col xs={12} lg={6}>
                <Form.Group className="py-2" controlId="formBasicSerialNumber">
                  <Form.Label>{t("serialNumber")}</Form.Label>
                  <Form.Control name="serialNumber" type="text" placeholder={t("serialNumber")} required defaultValue={data.serialNumber} />
                </Form.Group>
              </Col>
              <Col xs={12} lg={6}>
                <Form.Group className="py-2" controlId="formBasicSerialNumber">
                  <Form.Label>{t("employee")}</Form.Label>
                  <Form.Select aria-label={t("employee")} name="employeeId">
                    <option></option>
                    {employees.map((emp => <option key={emp.id} selected={emp.id === data.employeeId} value={emp.id}>{emp.name}</option>))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={12} lg={2} className="d-flex justify-content-center">
                <Form.Group className="d-flex align-items-center pt-4 mt-1" controlId="formBasicEmail">
                  <Form.Check name="available" type="checkbox" defaultChecked={data.available} />
                  <Form.Label id="available" className="mx-2 mb-0">{t("available")}</Form.Label>
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="success" type="submit" size="lg">{t("submit")}</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}
export default AddEditDeviceButton