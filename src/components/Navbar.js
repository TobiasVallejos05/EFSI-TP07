import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {

    return (
      <Navbar bg="white" variant="white">
      <Container>
      <img src={logo} alt="" width="114"/>
          <Nav className="ms-auto" >
              <Link className="nav-link active" to="">INICIO</Link>
              <Link className="nav-link active" to="/About">QUIENES SOMOS</Link>
              <Link className="nav-link active" to="/Products">PRODUCTOS</Link>
              <Link className="nav-link active" to="/Contact">CONTACTO</Link>
              <Link className="nav-link active" to="/Purchase">COMPRA</Link>
          </Nav>
      </Container>
  </Navbar>
    );
}

export default CustomNavbar;