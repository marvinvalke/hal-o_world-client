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
                        <Card style={{ width: '15rem'}}>
                            <Card.Img variant="top" src={elem.image}/>
                            <Card.Body>
                                <Card.Title>Mission: {elem.name}</Card.Title>

                                <Accordion >
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>See details</Accordion.Header>
                                        <Accordion.Body>
                                             <Card.Text>{elem.description}</Card.Text>
                                             <ListGroup className="list-group-flush">
                                                <ListGroupItem>Duration: {elem.duration} months</ListGroupItem>
                                                <ListGroupItem>Difficulty: {elem.difficulty}</ListGroupItem>                                                
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item> 
                                   </Accordion> 
                                 </Card.Body>
                               <Card.Body>
                               <ListGroupItem>Reviews</ListGroupItem>
                               <Button variant="outline-success" Link to={'/profile'}>Apply for this!</Button>{' '}
                             {/* <Card.Link to={'/profile'}></Card.Link> */}
                         
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
