import { useEffect } from 'react'
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { toast } from 'react-toastify'
import { getFormData } from '../../common/utils'
import { employeeApi } from '../../api'
import { useAuthContext } from '../../context'
import styles from "./Login.module.scss"

const Login = () => {
  const { t } = useTranslation()
  const { userDetails, setUserDetails } = useAuthContext()
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = getFormData(e.currentTarget)
    employeeApi.authenticate(data).then((data) => {
      setUserDetails(data)
      toast.success(t("loginSuccess"));
    }).catch(() => {
      toast.error(t("loginError"));
    })
  }

  useEffect(() => {
    if (userDetails?.id) {
      navigate("/");
    }
  }, [userDetails, navigate])

  return (
    <section className={styles.login}>
      <Form onSubmit={handleSubmit}>
        <h1>{t("loginTitle")}</h1>

        <div className="d-grid gap-2">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{t("email")}</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" size="lg" required defaultValue="j.chapman@example.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{t("password")}</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" size="lg" required defaultValue="123456" minLength="6" />
          </Form.Group>

          <Button variant="primary" type="submit" size="lg">
            {t("submit")}
          </Button>
        </div>
      </Form>
    </section>
  )
}
export default Login;