// import {Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/app.context";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Image,
} from "react-bootstrap";
// someting ? (<p></p>) : (<p></p>)

function MyNav(props) {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="grey" variant="dark">
        <Container>
          <Nav.Link>
            <Link to="/" className="nav-link">
              <Image className="logo" src="/images/logo-clear.png" />
            </Link>
          </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link></Nav.Link>
              <Nav.Link></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Link to="/missions" id="appLink" className="nav-link Applink">
                  Missions
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <Link
                  to="/about"
                  id="appLink"
                  className="nav-link"
                  color="inherit"
                >
                  About us
                </Link>
              </Nav.Link>
              {user ? (
                <>
                <Nav.Link eventKey={3}>
                  <Link id="appLink" className="nav-link" to="/profile">
                    View Profile
                  </Link>
                  </Nav.Link>
                  <Nav.Link eventKey={4}>
                  <Link
                    id="appLink"
                    className="nav-link"
                    to="/profile"
                    onClick={props.onLogout}
                    variant="warning"
                  >
                    Logout
                  </Link>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link>
                    <Link
                      id="appLink"
                      to="/signin"
                      className="nav-link"
                      color="inherit"
                    >
                      Take me in
                    </Link>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNav;
{
  /*  src="https://live.staticflickr.com/65535/51749135506_d5c1387a00_m.jpg" width="240" height="70" alt="logo"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script> */
}
