import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

const Header = () => {
  return <header>
    <Container>
      <Link to="/">
        <img src="/assets/img/logo.svg" height="24px" alt="logo" loading="lazy" />
      </Link>
    </Container>
  </header>
}
export default Header