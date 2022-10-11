import { Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useMemo } from "react"
import { useAuthContext } from "../../../context"

const Home = () => {
  const { t } = useTranslation()
  const { userDetails } = useAuthContext()

  const userIsManager = useMemo(() => {
    return userDetails?.id && userDetails.role === "manager"
  }, [userDetails])

  return (
    <Row className="justify-content-md-center">
      {userIsManager &&
        <Col xs lg="3" className="d-grid">
          <Button variant="primary" size="lg" as={Link} to="/employees">{t("employees")}</Button>
        </Col>
      }

      <Col xs lg="3" className="d-grid">
        <Button variant="primary" size="lg" as={Link} to="/devices">{t("devices")}</Button>
      </Col>

    </Row>
  )
}

export default Home