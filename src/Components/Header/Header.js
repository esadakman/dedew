// import { dedewLogo } from "../Images";
import { dedewLogo2 } from "../Images";
// import Wallet from "./Wallet/Wallet";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import "./headerStyle.scss";
// import headerStyle from "./headerStyle.module.scss";

function Header() { 
  return (
    <>
      {/* // ! Navbar Bootstrap */}
      <Navbar expand="lg" className="navbar-boot" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={dedewLogo2} alt="dedew logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <i className="fa-solid fa-bars text-light"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll text-va">
            <Nav className="me-auto my-2 my-lg-0 d-flex w-100 justify-content-center gap-1 text-light asd">
              <Nav.Link href="#news" >News</Nav.Link>
              <Nav.Link href="#news"  >Blog</Nav.Link>
              <NavDropdown title="Project Detail">
                <NavDropdown.Item style={{ width: "100%" }} href="#learn">
                  Learn{" "}
                </NavDropdown.Item>
                <NavDropdown.Item style={{ width: "100%" }} href="#art">
                  Art
                </NavDropdown.Item>
                <NavDropdown.Item style={{ width: "100%" }} href="#roadmap">
                  Roadmap
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About Us">
                <NavDropdown.Item href="#team">Team</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#partnership">
                  Partnership
                </NavDropdown.Item>
                <NavDropdown.Item href="#sponsorship">
                  Sponsorship
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
            {/* <Nav> */}
            <Nav>
              <Nav.Link href="#home" className="wallet">
                Connect Wallet
              </Nav.Link>
            </Nav>
            {/* </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
