import React, {useState, useEffect} from 'react';
import {useParams, Navigate} from 'react-router-dom';
import { HALO_URL } from "../config";
import axios from "axios";
import {Spinner, Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';

function MissionsDetails(props) {

    const {missionName} = useParams();
    const [missionsDetail, setMissionsDetail] = useState(null);

    //-----------------------axios req to fetch info from the selected mission------------------
    useEffect(() => {
        const fetchData = async () => {
            
           let response = await axios.get(`${HALO_URL}/missions/${missionName}`, {withCredentials: true})
           setMissionsDetail(response.data)
        }
        fetchData()
    }, [])
    //----------------------------------------------------------------------------------------
    //------------------loading content from api -------------------------
    if( !missionsDetail) {
        return <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
    }
    //-----------------------------------------------------------------
    // Ensuring only logged in users see the page
    // if (!props.user) {
    //     return <Navigate to="/signin" />
    // }
    //-----------------------------------------------------------------
    
        
    
    return (
        <div>
                  

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={missionName.image} />
            <Card.Body>
                <Card.Title>Mission: {missionName.name}</Card.Title>
                <Card.Text> {missionName.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Duration: {missionName.duration} months</ListGroupItem>
                <ListGroupItem>Difficulty: {missionName.difficulty}</ListGroupItem>  
                <ListGroupItem>Rating: add reviews rating</ListGroupItem>                                               
            </ListGroup>
            <Card.Body>
                <Button variant="outline-success" Link to={'/profile'}>Edit Mission</Button>{' '}
                <Button variant="outline-success" Link to={'/profile'}>Apply for this!</Button>{' '}
            </Card.Body>
            </Card>
        </div>
    )
}

export default MissionsDetails
