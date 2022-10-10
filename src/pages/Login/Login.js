import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "./Login.module.scss"
import { useTranslation } from 'react-i18next';
import { getFormData } from '../../common/utils';

const Login = () => {
  const { t } = useTranslation()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = getFormData(e.currentTarget)
    console.log(data)
  }

  return (
    <section className={styles.login}>
      <Form onSubmit={handleSubmit}>
        <h1>{t("loginTitle")}</h1>

        <div className="d-grid gap-2">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{t("email")}</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" size="lg" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{t("password")}</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" size="lg" required />
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