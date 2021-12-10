import React, {useState, useEffect} from 'react';
import {useParams, Navigate, Link} from 'react-router-dom';
import { HALO_URL } from "../config";
import axios from "axios";
import {Spinner, Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';

function MissionsDetails() {

    const {missionId} = useParams();
    const [missionsDetail, setMissionsDetail] = useState(missionId);
    // console.log(missionsDetail)

    //-----------------------axios req to fetch info from the selected mission------------------
    useEffect(() => {
        const fetchData = async () => {
            
           let response = await axios.get(`${HALO_URL}/missions/${missionId}`, {withCredentials: true})
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
            <Card.Img variant="top" src={missionsDetail.image} />
            <Card.Body>
                <Card.Title>Mission: {missionsDetail.name}</Card.Title>
                <Card.Text> {missionsDetail.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Duration: {missionsDetail.duration} months</ListGroupItem>
                <ListGroupItem>Difficulty: {missionsDetail.difficulty}</ListGroupItem>  
                <ListGroupItem>Rating: add reviews rating</ListGroupItem>                                               
            </ListGroup>
            <Card.Body>
                <Link to={`/missions/${missionsDetail._id}/edit`}>
                    <Button variant="outline-success">Edit mission</Button>{' '}
                </Link>
                <Link to={'/profile'}>
                    <Button variant="outline-success">Apply</Button>{' '}
                </Link>
            </Card.Body>
            </Card>
        </div>
    )
}

export default MissionsDetails
