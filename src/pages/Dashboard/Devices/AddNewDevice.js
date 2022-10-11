import { useState } from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { devicesApi } from "../../../api";
import { getFormData } from "../../../common/utils";
import { pruneData } from "./deviceHelper";

const AddNewFilter = ({ onCreate = () => { } }) => {
  const { t } = useTranslation()
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  const handleSubmit = (e) => {
    e.preventDefault()
    const formEl = e.currentTarget
    let data = pruneData((getFormData(formEl)))
    devicesApi.create(data).then(() => {
      onCreate()
      handleShow();
      formEl.reset()
    })
  }

  return (
    <>
      <Button variant="success" type="button" onClick={handleShow} size="lg" className="mt-5">
        {t("addNewDevice")}
      </Button>

      <Modal show={show} onHide={handleShow} size="lg" centered>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>{t("addNewDevice")}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row className="align-items-center">
              <Col xs lg={6}>
                <Form.Group className="py-2" controlId="formBasicBrand">
                  <Form.Label>{t("brand")}</Form.Label>
                  <Form.Control name="brand" type="text" placeholder={t("brand")} autoFocus required />
                </Form.Group>
              </Col>
              <Col xs lg={6}>
                <Form.Group className="py-2" controlId="formBasicProduct">
                  <Form.Label>{t("product")}</Form.Label>
                  <Form.Control name="product" type="text" placeholder={t("product")} required />
                </Form.Group>
              </Col>
              <Col xs lg={6}>
                <Form.Group className="py-2" controlId="formBasicSerialNumber">
                  <Form.Label>{t("serialNumber")}</Form.Label>
                  <Form.Control name="serialNumber" type="text" placeholder={t("serialNumber")} required />
                </Form.Group>
              </Col>
              <Col xs lg={2} className="d-flex justify-content-center">
                <Form.Group className="d-flex align-items-center pt-4 mt-1" controlId="formBasicEmail">
                  <Form.Check name="available" type="checkbox" />
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
export default AddNewFilter