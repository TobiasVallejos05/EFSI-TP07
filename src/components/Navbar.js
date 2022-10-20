import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png';

function NavbarCasera() {

    return (
      <Navbar bg="white" variant="white">
      <Container>
      <img src={logo} alt="" width="114"/>
          <Nav className="ms-auto" >
              <Nav.Link className="nav-link active" href="/Home">INICIO</Nav.Link>
              <Nav.Link className="nav-link active" href="/QuienesSomos">QUIENES SOMOS</Nav.Link>
              <Nav.Link className="nav-link active" href="/Productos">PRODUCTOS</Nav.Link>
              <Nav.Link className="nav-link active" href="/Contacto">CONTACTO</Nav.Link>
          </Nav>
      </Container>
  </Navbar>
    );
}

export default NavbarCasera;