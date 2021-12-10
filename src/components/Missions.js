import React from 'react';
import {Spinner, Card, ListGroup, ListGroupItem, Accordion, Button} from 'react-bootstrap';
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
                        <div className="container-card" >
                       
                            <Card style={{ width: '18rem', height: '25rem' }}>
                                <Card.Img variant="top" src={elem.image} />
                                <Card.Body>
                                    <Card.Title>Mission: {elem.name}</Card.Title>                                    
                                    <Button variant="primary" Link to={'/profile'}>Apply for this!</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    )
                })
            }                       
            
        </div>
        
    )
}

export default Missions
