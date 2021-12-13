import React, {useState, useEffect, useContext} from 'react';
import {Spinner, Card, ListGroup, ListGroupItem, Accordion, Button} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import SearchBar from './SearchBar';
import { HALO_URL } from "../config";
import axios from "axios";
import { UserContext } from "../context/app.context";


function Missions(props) {

    const {user} = useContext(UserContext) 
    const [missions, setMissions] = useState([]) //to store missions info
    const [missionsCopy, setMissionsCopy] = useState(missions) //new state with missions copy to be filtered by the search bar
    
    const navigate = useNavigate();

    //------------------fetching info from the api -------------------------
     useEffect(() => {
        const fetchData = async () => {
        let response  = await axios.get(`${HALO_URL}/missions`, {withCredentials: true})
        setMissions(response.data);
        setMissionsCopy(response.data)                
    }
    fetchData()
    }, [])
    //-----------------------------------------------------------------

    // conditional rendering for when user updates------------
    //   useEffect(() => {
    //     navigate('/')
    // }, [missions])
    //-------------------------------------------------

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
    
    const handleNameOrder = () => {
        let clone = JSON.parse(JSON.stringify(missions))
        clone.sort((first, second) => {
            if (first.name > second.name) {
                return 1
            } 
            else if (first.name < second.name) {
                return -1
            }
            else {
                return 0
            }
        })
        setMissions(clone)
    }
 
   const {applyClick} = props

    return (
        <div>
            <SearchBar btnSearch={handleSearch} />
            <h1>Check out the space missions that we have for you!</h1>
            <h3>Pick your favorite one and proceed with your application.</h3>
            <h4>Good luck astronaut!</h4>
            <button onClick={handleNameOrder}>A-Z</button>
            {
                missionsCopy.map((elem) => {
                    return (
                        <div className="container-card" >
                       
                            <Card style={{ width: '18rem', height: '25rem' }}>
                                <Card.Img variant="top" src={elem.image} />
                                <Card.Body>
                               
                                    {
                                        user? (
                                        <Link to={`/missions/${elem._id}`}><Card.Title >Mission: {elem.name}</Card.Title></Link> 
                                        ) : (
                                            <Link to={'/signin'}> <Card.Title >Mission: {elem.name}</Card.Title></Link>       
                                        )
                                    }
                                    
                                   {
                                       user? (
                                      <Link to={`/profile/mymissions`}>
                                        <Button onClick={(event) => { applyClick(event, elem._id)  }} variant="primary" >Apply for this!</Button>
                                      </Link>  
                                    ) : (
                                      <Link to={'/signin'}><p>Login for application</p></Link>
                                       )
                                   }                              
                                   
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
