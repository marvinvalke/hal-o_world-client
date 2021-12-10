import React, {useState, useEffect} from 'react';
import {Spinner, Card, ListGroup, ListGroupItem, Accordion, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import { HALO_URL } from "../config";
import axios from "axios";


function Missions() {

     
    const [missions, setMissions] = useState([]) //to store missions info
    const [missionsCopy, setMissionsCopy] = useState(missions) //new state with missions copy to be filtered by the search bar
    
    //------------------fetching info from the api -------------------------
     useEffect(() => {
        const fetchData = async () => {
        let response  = await axios.get(`${HALO_URL}/missions`, {withCredentials: true})
        setMissions(response.data)
        setMissionsCopy(response.data)                
    }
    fetchData()
    }, [])
    //-----------------------------------------------------------------

    //------------------loading content from api -------------------------
    if( !missionsCopy.length) {
        return <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
             </Spinner>
    }
    //-----------------------------------------------------------------

    //------------------handle search content -------------------------
        const handleSearch = (event) => {
            let someMission = event.target.value
            let filteredMission = missions.filter((mission) => {
                return mission.name.toLowerCase().includes(someMission.toLowerCase())
            })
            setMissionsCopy(filteredMission)
        }
    //-----------------------------------------------------------------

   

    return (
        <div>
            <SearchBar btnSearch={handleSearch} />
            <h1>Check out the space missions that we have for you!</h1>
            <h3>Pick your favorite one and proceed with your application.</h3>
            <h4>Good luck astronaut!</h4>
            {
                missionsCopy.map((elem) => {
                    return (
                        <div className="container-card" >
                       
                            <Card style={{ width: '18rem', height: '25rem' }}>
                                <Card.Img variant="top" src={elem.image} />
                                <Card.Body>
                                    <Card.Title ><Link to={`/missions/${elem.name}`}>Mission: {elem.name}</Link></Card.Title>                                    
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
