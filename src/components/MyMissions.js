import React, { useState, useEffect } from "react";
import { HALO_URL } from "../config";
import axios from 'axios'
import {useParams, Link, Navigate} from 'react-router-dom'
import {Spinner, Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';

function MyMissions() {
    const [applyMission, setApplyMission] = useState([]);
    const [createdMission, setCreatedMission] = useState([]);

    useEffect(()=>{
        async function getData(){
            
            let response = await axios.get(`${HALO_URL}/profile/mymissions`,{withCredentials: true})
            setApplyMission(response.data.MissionsAdded)
            // console.log(response.data.MissionsAdded)
        }
  
        getData()
  
    },[])

    useEffect(()=>{
        async function getData(){
            
            let response = await axios.post(`${HALO_URL}/profile/mymissions/create`,{withCredentials: true})
            setCreatedMission(response.data.MissionsCreated)
            console.log(response.data.MissionsCreated)
        }
  
        getData()
  
    },[])
      

    const handleDelete = async (id) => {
        await axios.delete(`${HALO_URL}/profile/mymissions/${id}`, {withCredentials: true})
        
        let filteredMissions = applyMission.filter((elem) => {
          return elem._id !== id
        })
    
        setApplyMission(filteredMissions)
       }


    return (
        <div>
            <h3>Missions you've applied for:</h3>
            {
                applyMission.map((elem) => {
                  return (
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={elem.image} />
                      <Card.Body>
                        <Card.Title>{elem.name}</Card.Title>
                        <Card.Text>
                          {elem.description}
                        </Card.Text>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem> {elem.duration}</ListGroupItem>
                        <ListGroupItem> {elem.difficulty}</ListGroupItem>
                        <ListGroupItem>Reviews</ListGroupItem>
                      </ListGroup>   
                      <Link to={`/missions/${elem._id}/edit`}>
                    <Button variant="outline-success">Edit mission</Button>{' '}
                    </Link>     
                    <Button onClick={() => { handleDelete(elem.id)  }  } type="submit" variant="outline-success">Delete Mission</Button>{' '}                
                    </Card>
                  )
                })                  
              }
              <h3>Missions you've created:</h3>   
              
        </div>
    )
}

export default MyMissions
