import { useEffect } from 'react'
import { Container, Tabs, Tab } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useAuthContext } from '../../context'
import styles from "./Dashboard.module.scss"
import Footer from './Footer'
import Header from './Header'
import Devices from './Devices/Devices'
import Employees from './Employees'

const Dashboard = () => {
  const { userDetails } = useAuthContext()
  const navigate = useNavigate();
  const { t } = useTranslation()

  useEffect(() => {
    if (!userDetails?.id) {
      navigate("/login");
    }
  }, [userDetails, navigate])

  return (
    <main className={styles.dashboard}>
      <Header />
      <Container className="py-5">
        <Tabs
          defaultActiveKey="employees"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="employees" title={t("employees")}>
            <Employees />
          </Tab>
          <Tab eventKey="Devices"  title={t("devices")}>
            <Devices />
          </Tab>
        </Tabs>

      </Container>
      <Footer />
    </main>
  )
}
export default Dashboard