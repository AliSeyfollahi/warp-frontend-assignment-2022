import { Button, Form, Container, Row, Col } from "react-bootstrap"

import { useTranslation } from "react-i18next"
import { getFormData } from '../../../common/utils'
import objectHelper from '../../../common/utils/objectHelper'
import { pruneData } from "./deviceHelper"

const DevicesFilters = ({ onFilter = () => { } }) => {
  const { t } = useTranslation()

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = pruneData(objectHelper.removeEmptyValues(getFormData(e.currentTarget)))
    onFilter(data)
  }

  return <Form onSubmit={handleSubmit}>
    <Container className="mb-5">
      <Row className="align-items-center">
        <Col xs={12} lg={3} className="mb-3">
          <Form.Group className="py-2" controlId="formBasicEmail">
            <Form.Control name="brand" type="text" placeholder={t("brand")} />
          </Form.Group>
        </Col>
        <Col xs={12} lg={2} className="d-flex justify-content-center mb-3">
          <Form.Group className="d-flex align-items-center" controlId="formBasicEmail">
            <Form.Check name="available" type="checkbox" />
            <Form.Label id="available" className="mx-2 mb-0">{t("available")}</Form.Label>
          </Form.Group>
        </Col>
        <Col xs={12} lg={1} className="d-grid mb-3">
          <Button variant="outline-primary" type="submit" >
            {t("filter")}
          </Button>
        </Col>
      </Row>
    </Container>
  </Form>
}
export default DevicesFilters