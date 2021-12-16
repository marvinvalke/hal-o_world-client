import React, { useState, useEffect, useContext } from "react";
import {
  Spinner,
  Card,
  ListGroup,
  ListGroupItem,
  Accordion,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { HALO_URL } from "../config";
import axios from "axios";
import { UserContext } from "../context/app.context";
import Rating from "@mui/material/Rating";
import CardMedia from "@mui/material/CardMedia";

function Missions(props) {
  const { user } = useContext(UserContext);
  const [missions, setMissions] = useState([]); //to store missions info
  const [missionsCopy, setMissionsCopy] = useState(missions); //new state with missions copy to be filtered by the search bar
  const [randomMission, setRandomMission] = useState(null);
  const navigate = useNavigate();

  //------------------fetching info from the api -------------------------
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(`${HALO_URL}/missions`, {
        withCredentials: true,
      });
      console.log(response.data);
      setMissions(response.data);
      setMissionsCopy(response.data);
    };
    fetchData();
  }, []);
  //-----------------------------------------------------------------

  // conditional rendering for when user updates------------
/*    useEffect(() => {
    navigate('/')
 }, [missions]) */
  //-------------------------------------------------

  //------------------loading content from api -------------------------
  if (!missions.length) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  //-----------------------------------------------------------------

  //------------------handle search content -------------------------
  const handleSearch = (event) => {
    let someMission = event.target.value;
    let filteredMission = missions.filter((mission) => {
      return mission.name.toLowerCase().includes(someMission.toLowerCase());
    });
    setMissionsCopy(filteredMission);
  };
  //-----------------------------------------------------------------

  //------------------handle A-Z ordering -------------------------
  const handleNameOrder = () => {
    let clone = JSON.parse(JSON.stringify(missionsCopy));
    clone.sort((first, second) => {
      if (first.name > second.name) {
        return 1;
      } else if (first.name < second.name) {
        return -1;
      } else {
        return 0;
      }
    });
    setMissionsCopy(clone);
  };
  // -----------------

  //------------------handle getting a random mission------------------------
  const handleRandomMission = () => {
    let randomMission =
      missionsCopy[Math.floor(Math.random() * missionsCopy.length)];

    setRandomMission(randomMission);
  };

  console.log("Random Mission:", randomMission);

  //---------------------------------------------------------------------------

  const { applyClick } = props;
  return (
    <div className="missionsContainer">
      <div className="missionTitles">
        <h1>Check out the space missions that we have for you!</h1>
        <h3>Pick your favorite one and proceed with your application.</h3>
        <h4>Good luck astronaut!</h4>
      </div>
      <SearchBar btnSearch={handleSearch} />
      <div className="landingBtn">
        <button class="avatar2" onClick={handleNameOrder}>
          A-Z
        </button>
        <button class="avatar2" onClick={handleRandomMission}>
          Get a random Mission
        </button>
      </div>
      {randomMission ? (
        <>
          <div className="missionDetailsContainer">
            <Card style={{ width: "18rem", height: "25rem" }}>
              <CardMedia
                component="img"
                height="140"
                image={randomMission.image}
                alt=""
              />
              <Card.Body>
                <Rating name="read-only" value={randomMission.rate} readOnly />
                <Link to={`/missions/${missions._id}`}>
                  <Card.Title>Mission: {randomMission.name}</Card.Title>
                </Link>
              </Card.Body>

              {user ? (
                <>
                  <Link to={`/profile/mymissions`}>
                    <button
                      className="applyBtn"
                      onClick={(event) => {
                        applyClick(event, missions._id);
                      }}
                    >
                      Apply for this!
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/signin"}>
                    <p>Login for application</p>
                  </Link>
                </>
              )}
            </Card>
          </div>
        </>
      ) : (
        <p>No Random</p>
      )}
      {/*  {
           randomMission.map((e)=>{
               return (
                   <p>{e.name}</p>
               )
           })
       }  */}
      <div className="missionCards">
        {missionsCopy.map((elem) => {
          return (
            <div className="container-card">
              {user ? (
                <>
                  <Card style={{ width: "18rem", height: "25rem" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={elem.image}
                      alt=""
                    />
                    <Card.Body>
                      <Rating name="read-only" value={elem.rate} readOnly />
                      <Link to={`/missions/${elem._id}`}>
                        <Card.Title>Mission: {elem.name}</Card.Title>
                      </Link>
                      <Link to={`/profile/mymissions`}>
                        <button
                          className="applyBtn"
                          onClick={(event) => {
                            applyClick(event, elem._id);
                          }}
                        >
                          Apply for this!
                        </button>
                      </Link>
                    </Card.Body>
                  </Card>
                </>
              ) : (
                <>
                  <Card style={{ width: "18rem", height: "25rem" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={elem.image}
                      alt=""
                    />
                    <Card.Body>
                      <Link to={"/signin"}>
                        {" "}
                        <Card.Title>Mission: {elem.name}</Card.Title>
                      </Link>
                      <Link to={"/signin"}>
                        <p>Login for application</p>
                      </Link>
                    </Card.Body>
                  </Card>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Missions;
