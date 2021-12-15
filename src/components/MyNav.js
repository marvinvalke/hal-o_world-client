// import {Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/app.context";
import {Navbar, Container, Nav, NavDropdown, Button, Image} from "react-bootstrap";

// someting ? (<p></p>) : (<p></p>)

function MyNav(props) {
  const { user } = useContext(UserContext);

  return (
    <div>  
          <Navbar collapseOnSelect expand="lg" bg="grey" variant="dark">
            <Container>
            <Nav.Link >
              <Link to="/" className="nav-link" color="inherit">
                <Image src={"https://live.staticflickr.com/65535/51749135506_d5c1387a00_m.jpg"} />
               </Link>            
            </Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link ></Nav.Link>
                <Nav.Link ></Nav.Link>                
              </Nav>
              <Nav>
                <Nav.Link >
                  <Link to="/missions" className="nav-link" color="inherit">
                    Missions
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey={2} >
                  <Link to="/about" className="nav-link" color="inherit">
                    About us
                  </Link>                             
                </Nav.Link>
                <NavDropdown className="nav-link me-auto" title="My Profile" id="collasible-nav-dropdown">

                    {user ? (
                        <>
                        <NavDropdown.Item >
                          <Link className="nav-link" to="/profile">View Profile</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                          <Link className="nav-link" to="/profile/edit">Edit Profile</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                          <Button onClick={props.onLogout} variant="warning">Logout</Button>{' '}
                        </NavDropdown.Item>                           
                        </>
                      ) : (
                        <>
                         <NavDropdown.Item >
                            <Link to="/signin" className="nav-link" color="inherit">Take me in</Link>
                         </NavDropdown.Item>
                        </>
                      )}                            
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="https://www.nasa.gov/missions">NASA's info</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="nav-link" eventKey={2} >
                  pic
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>    
    </div>
  );
}

export default MyNav;
{/*  src="https://live.staticflickr.com/65535/51749135506_d5c1387a00_m.jpg" width="240" height="70" alt="logo"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script> */}