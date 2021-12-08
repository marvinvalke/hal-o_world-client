import React from 'react';
import {Link} from 'react-router-dom';

function MyNav() {
    return (
        <div>
            <Link  style={{marginLeft: '10px'}}  to="/signin">SignIn</Link>
            <Link  style={{marginLeft: '10px'}}  to="/signup">SignUp</Link>
        </div>
    )
}

export default MyNav
