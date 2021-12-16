import React, { useState, useEffect, useContext } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { HALO_URL } from "../config";
import axios from "axios";
import {Spinner, Card,ListGroup} from "react-bootstrap";
import CardMedia from "@mui/material/CardMedia";

function MissionsDetails(props) {
  const { missionId } = useParams();
  const [missionsDetail, setMissionsDetail] = useState(missionId);

  //-----------------------axios req to fetch info from the selected mission------------------
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(`${HALO_URL}/missions/${missionId}`, {
        withCredentials: true,
      });
      console.log(response.data);
      setMissionsDetail(response.data);
      // let response2 = await axios.get(`${HALO_URL}/profile/mymissions/${missionId}/review`, { withCredentials: true});
      // setReviewsComment(response2.data)
    };
    fetchData();
  }, []);
  //----------------------------------------------------------------------------------------
  //------------------loading content from api -------------------------
  if (!missionsDetail) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  //-----------------------------------------------------------------
  // Ensuring only logged in users see the page
  // if (!props.user) {
  //     return <Navigate to="/signin" />
  // }
  //-----------------------------------------------------------------
  const { applyClick } = props;
  return (
    <div className="missionDetailsContainer">
      <Card style={{ width: "28rem" }}>
        <CardMedia
          component="img"
          height="140"
          image={missionsDetail.image}
          alt=""
        />
        <Card.Body>
          <Card.Title>Mission: {missionsDetail.name}</Card.Title>
          <Card.Text> {missionsDetail.description}</Card.Text>
          <hr />
          <ListGroup className="list-group-flush">
            Duration: {missionsDetail.duration} months
            <br />
            Difficulty: {missionsDetail.difficulty}
          </ListGroup>
          <button
            className="applyBtn"
            onClick={(event) => {
              applyClick(event, missionsDetail._id);
            }}
            variant="outline-success"
          >
            Apply
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MissionsDetails;
