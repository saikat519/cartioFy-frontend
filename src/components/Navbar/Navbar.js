import React from "react";
import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';
import { useStateValue } from "../../StateProvider"; 
import Cookies from 'js-cookie';

function Landing() {
  const [{ user_id }, dispatch] = useStateValue();
  const logOut = () => {
    dispatch({
      type: "SET_USER",
      user_id:null
    })
    Cookies.remove("Authtoken");
  }
  return (
    <div className="App">
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Cartiofy</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      {user_id ?
            <Nav.Link onClick={logOut}>
              Logout
            </Nav.Link>
                :
            <>
              <Nav.Link href="/login">
                Login
              </Nav.Link>
              <Nav.Link href="/register">
                SignUp
              </Nav.Link>
            </>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      
    </div>
  );
}

export default Landing;