import React from 'react';
import {Spinner} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function Missions(props) {

    const {missions} = props

    if(!missions.length) {
        return <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
    }

    return (
        <div>
            <h1>Check out the space missions that we have for you!</h1>
            <h3>Pick your favorite one and proceed with your application.</h3>
            <h4>Good luck astronaut!</h4>
            {
                missions.map((elem) => {
                    return (
                        <>
                        <Link to={`/missions`} >{elem.name}</Link>
                        </>
                    )
                })
            }
            
        </div>
    )
}

export default Missions
