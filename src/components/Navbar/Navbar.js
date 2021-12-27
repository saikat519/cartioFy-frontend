import React from "react";
import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';
import { useStateValue } from "../../StateProvider"; 

function Landing({setSignup,setLogin,isLogin,isSignup}) {
  const [{ user }, dispatch] = useStateValue();
  const logOut = () => {
    dispatch({
      type: "SET_USER",
      user:null
    })
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
      {user ?
            <Nav.Link onClick={logOut}>
              Logout
            </Nav.Link>
                :
            <>
              <Nav.Link onClick={setLogin}>
                Log in
              </Nav.Link>
              <Nav.Link onClick={setSignup}>
                Sign up
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
