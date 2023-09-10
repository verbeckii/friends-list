import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Friend App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link disabled as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/friends/create">
              Add Friend
            </Nav.Link>
            <Nav.Link disabled as={NavLink} to="/logout">
              Log Out
            </Nav.Link>
            <Nav.Link disabled as={NavLink} to="/edit-profile">
              Edit Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
