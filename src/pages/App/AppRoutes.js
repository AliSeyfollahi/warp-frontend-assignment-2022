import React from "react"
import {
  Routes,
  Route,
} from "react-router-dom";

const Login = React.lazy(() => import('../Login'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
export default AppRoutes