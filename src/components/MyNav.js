// import {Navbar, Nav, NavItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import React from 'react';
import {useContext} from 'react'
import {UserContext} from '../context/app.context'

// someting ? (<p></p>) : (<p></p>)
function MyNav(props) {
    
    const {user} = useContext(UserContext)
   
    return (
                
        <div>
            <Link to="/" className='nav-link' color="inherit">Home</Link>
            <Link to="/missions" className='nav-link' color="inherit">Missions</Link>
            <Link to="/about" className='nav-link' color="inherit">About us</Link>
            {
					user ? (
						<Link to="/apod">SEE APOD</Link>
					) : (
						<>
						<Link to="/signin" className='nav-link' color="inherit">Take me in</Link> 
						</>
					)
				}
                     


            {/* <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <Link to="/" className='nav-link' color="inherit">Home</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        <Link to="/missions" className='nav-link' color="inherit">Missions</Link>
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        <Link to="/about" className='nav-link' color="inherit">About us</Link>  
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        <Link to="/signin" className='nav-link' color="inherit">Take me in</Link>
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
                </Navbar> */}

        </div>       
    )
}

export default MyNav
