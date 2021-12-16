import React, { useState, useEffect } from "react";
import { HALO_URL } from "../config";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";
import CardMedia from "@mui/material/CardMedia";

function MyMissions(props) {
  const [applyMission, setApplyMission] = useState([]);
  const [createdMission, setCreatedMission] = useState([]);

  useEffect(() => {
    async function getData() {
      let response = await axios.get(`${HALO_URL}/profile/mymissions`, {
        withCredentials: true,
      });
      setApplyMission(response.data.MissionsAdded);
      setCreatedMission(response.data.MissionsCreated);

    }

    getData();
  }, []);


  const { deleteButton } = props;

  return (
    <div className="myMissionsContainer">
      <div className="missionsApply">
        <div className="missionTitles">
          <h3>Missions you've applied for:</h3>
        </div>
        {applyMission.map((elem) => {
          console.log(elem.rate);
          return (
            <Card style={{ width: "18rem", height:"400px", margin: "20px" }}>
              <CardMedia
                component="img"
                height="140"
                image={elem.image}
                alt=""
              />
              <Card.Body>
                <Card.Title>{elem.name}</Card.Title>
                <Card.Text>
                  Description: <br />
                  {elem.description}
                </Card.Text>
                <hr />
                <ListGroup className="list-group-flush">
                  Duration: {elem.duration} Months
                  <br />
                  Difficulty: {elem.difficulty}
                </ListGroup>
              </Card.Body>

              <Link to={`/profile/mymissions/${elem._id}/review`}>
                <button id="editMission" className="applyBtn" variant="outline-success">
                  Review mission
                </button>{" "}
              </Link>
            </Card>
          );
        })}
      </div>
      {!createdMission.length ? (
        ""
      ) : (
        <>
          <div className="missionsApply">
            <div className="missionTitles">
              <h3>Missions you've created:</h3>
            </div>
            {createdMission.map((elem) => {
              return (
                <Card
                  style={{ width: "18rem", height:"400px", margin: "20px" }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={elem.image}
                    alt=""
                  />
                  <Card.Body>
                    <Card.Title>{elem.name}</Card.Title>
                    <Card.Text>
                      Description: <br /> {elem.description}
                    </Card.Text>
                    <hr />
                    <ListGroup className="list-group-flush">
                      Duration: {elem.duration} Months
                      <br />
                      Difficulty: {elem.difficulty}
                    </ListGroup>
                  </Card.Body>
                  <Link to={`/missions/${elem._id}/edit`}>
                    <button id="editMission" className="applyBtn" variant="outline-success">
                      Edit mission{" "}
                    </button>
                  </Link>
                  <button id="editMission"
                    className="applyBtn"
                    onClick={() => {
                      deleteButton(elem._id);
                    }}
                    type="submit"
                    variant="outline-success"
                  >
                    Delete Mission
                  </button>{" "}
                </Card>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default MyMissions;
