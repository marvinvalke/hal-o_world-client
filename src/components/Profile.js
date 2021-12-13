import React, { useState, useEffect } from "react";
import { HALO_URL } from "../config";
import axios from 'axios'
import {useParams, Link, Navigate} from 'react-router-dom'
import {Spinner, Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Profile(props) {

    const [user, setUser] = useState(null);
    const {userId} = useParams()
    const [applyMission, setApplyMission] = useState([]);

    // console.log(user)
    useEffect(()=>{
        async function getData(){
            let response = await axios.get(`${HALO_URL}/user`,{withCredentials: true});
            
            setUser(response.data)
        }

        getData()

    },[])


    useEffect(()=>{
      async function getData(){
          
          let response = await axios.get(`${HALO_URL}/profile/mymissions`,{withCredentials: true})
          setApplyMission(response.data.MissionsAdded)
          console.log(response.data.MissionsAdded)
      }

      getData()

  },[])
    
    if(!user){
        return <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
    }

    return (
        <div>
            <h1>Hello {user.username}</h1>
                <TextField
                  id="filled-read-only-input"
                  label="Username"
                  defaultValue={user.username}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
                <TextField
                  id="filled-read-only-input"
                  label="email"
                  defaultValue={user.email}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
                <Link to="/apod">SEE APOD</Link>

                
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
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                      </ListGroup>                      
                    </Card>
                  )
                })   
              }
                  
                   
        </div>
    )
}

export default Profile
