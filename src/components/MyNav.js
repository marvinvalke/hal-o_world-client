
import {Link} from 'react-router-dom';
import React from 'react';


function MyNav(props) {

   
    return (
                
        <div>
            <Link to="/missions" className='nav-link' color="inherit">Missions</Link>
            <Link to="/about" className='nav-link' color="inherit">About us</Link>
            <Link to="/signin" className='nav-link' color="inherit">Take me in</Link>
                
        </div>       
    )
}

export default MyNav
