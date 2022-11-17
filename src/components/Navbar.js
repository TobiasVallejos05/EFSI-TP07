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
              <Link className="nav-link active" to="/about">QUIENES SOMOS</Link>
              <Link className="nav-link active" to="/products">PRODUCTOS</Link>
              <Link className="nav-link active" to="/contact">CONTACTO</Link>
              <Link className="nav-link active" to="/purchase">COMPRA</Link>
          </Nav>
      </Container>
  </Navbar>
    );
}

export default CustomNavbar;