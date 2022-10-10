import { Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  return (
    <Row className="justify-content-md-center">
      <Col xs lg="3" className="d-grid">
        <Button variant="primary" size="lg" as={Link} to="/employees">{t("employees")}</Button>
      </Col>
      <Col xs lg="3" className="d-grid">
        <Button variant="primary" size="lg" as={Link} to="/devices">{t("devices")}</Button>
      </Col>
    </Row>
  )
}

export default Home