import React from 'react';
import {Link} from 'react-router-dom';

function MyNav() {
    return (
        <div>
            <Link  style={{marginLeft: '10px'}}  to="/signin">Take me in</Link>
            
        </div>
    )
}

export default MyNav
