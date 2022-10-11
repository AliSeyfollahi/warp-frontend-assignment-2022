import { useEffect } from 'react'
import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import {
  Routes,
  Route,
} from "react-router-dom"
import { useAuthContext } from '../../context'
import styles from "./Dashboard.module.scss"
import Footer from './Footer'
import Header from './Header'
import Devices from './Devices/Devices'
import Home from './Home/Home'
import Employees from './Employees'

const Dashboard = () => {
  const { userDetails } = useAuthContext()
  const navigate = useNavigate();

  useEffect(() => {
    if (!userDetails?.id) {
      navigate("/login");
    }
  }, [userDetails, navigate])

  return (
    <main className={styles.dashboard}>
      <Header />
      <Container className="py-5">
        <Routes>
          <Route path="devices" element={<Devices />} />
          <Route path="employees" element={<Employees />} />
          <Route index element={<Home />} />
        </Routes>
      </Container>
      <Footer />
    </main>
  )
}
export default Dashboard