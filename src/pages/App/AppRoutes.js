import React from "react"
import { Suspense } from "react"
import {
  Routes,
  Route,
} from "react-router-dom"

const Login = React.lazy(() => import('../Login'))
const Dashboard = React.lazy(() => import('../Dashboard'))

const AppRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Suspense>
  )
}
export default AppRoutes