import React, { useState, useEffect } from "react";
import { HALO_URL } from "../config";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Rating from "@mui/material/Rating";

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
      // console.log(response.data.MissionsAdded)
    }

    getData();
  }, []);

  console.log("craetedMission", createdMission);
  console.log("addedMission", applyMission);

  const { deleteButton } = props;
  console.log(props.missionCreated);
  return (
    <div>
      <h3>Missions you've applied for:</h3>
      {applyMission.map((elem) => {
        console.log(elem.rate);
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={elem.image} />
            <Card.Body>
              <Card.Title>{elem.name}</Card.Title>
              <Card.Text>{elem.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem> {elem.duration}</ListGroupItem>
              <ListGroupItem> {elem.difficulty}</ListGroupItem>
            </ListGroup>

            <Link to={`/profile/mymissions/${elem._id}/review`}>
              <Button variant="outline-success">Review mission</Button>{" "}
            </Link>
          </Card>
        );
      })}
      {!createdMission.length ? (
        ""
      ) : (
        <>
          <h3>Missions you've created:</h3>
          {createdMission.map((elem) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={elem.image} />
                <Card.Body>
                  <Card.Title>{elem.name}</Card.Title>
                  <Card.Text>{elem.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem> {elem.duration}</ListGroupItem>
                  <ListGroupItem> {elem.difficulty}</ListGroupItem>
                </ListGroup>
                <Link to={`/missions/${elem._id}/edit`}>
                  <Button variant="outline-success">Edit mission</Button>{" "}
                </Link>
                <Button
                  onClick={() => {
                    deleteButton(elem._id);
                  }}
                  type="submit"
                  variant="outline-success"
                >
                  Delete Mission
                </Button>{" "}
              </Card>
            );
          })}
        </>
      )}
    </div>
  );
}

export default MyMissions;
