import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png';

const CustomNavbar = () => {

    return (
      <Navbar bg="white" variant="white">
      <Container>
      <img src={logo} alt="" width="114"/>
          <Nav className="ms-auto" >
              <Nav.Link className="nav-link active" to="Home">INICIO</Nav.Link>
              <Nav.Link className="nav-link active" to="/About">QUIENES SOMOS</Nav.Link>
              <Nav.Link className="nav-link active" to="/Products">PRODUCTOS</Nav.Link>
              <Nav.Link className="nav-link active" to="/Contact">CONTACTO</Nav.Link>
              <Nav.Link className="nav-link active" to="/Purchase">COMPRA</Nav.Link>
          </Nav>
      </Container>
  </Navbar>
    );
}

export default CustomNavbar;