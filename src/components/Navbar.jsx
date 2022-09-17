import React from "react";
import logo from "../assets/images/logo_bitdev.png"
import { Nav , Container, Navbar as NavbarBoot, NavDropdown,} from 'react-bootstrap';
const Navbar = () => {
  return (
    <> 

      <NavbarBoot bg="dark" variant="dark" expand="md" className="">
      <Container fluid>
        <NavbarBoot.Brand href="#"> 
        <img
              src={logo} 
              alt="React Bootstrap logo"
            />
        </NavbarBoot.Brand>
        <NavbarBoot.Toggle aria-controls="navbarScroll" />
        <NavbarBoot.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex w-100 justify-content-center" 
          >
            <Nav.Link href="#action1">News</Nav.Link> 
            <NavDropdown title="Project Detail" >
                <NavDropdown.Item href="#action/3.1">Learn</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Art</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Roadmap</NavDropdown.Item> 
              </NavDropdown>
              <NavDropdown title="About Us" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.4">Team</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.1">Partnership</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Sponsorship</NavDropdown.Item> 
              </NavDropdown>
          </Nav>
          <Nav>
              <Nav.Link href="#home" style={{width:"10rem"}}>CONNECT WALLET</Nav.Link> 
          </Nav>
        </NavbarBoot.Collapse>
      </Container>
    </NavbarBoot>
       
    </>
  );
};

export default Navbar;

 