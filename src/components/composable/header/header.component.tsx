import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../logo.png';

export const Header = () => {
    return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><i className="bi bi-list list-view"></i> <img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
      </Container>
    </Navbar>
    )
}