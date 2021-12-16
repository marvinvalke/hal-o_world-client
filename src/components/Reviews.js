import React, { useEffect, useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import { HALO_URL } from "../config";
import { useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";

function Reviews() {
  const Navigate = useNavigate();
  const [review, setReview] = useState([]);
  const { missionId } = useParams();
  // const [mission, setMission] = useState(null)
  const [missionsDetail, setMissionsDetail] = useState(missionId);
  // console.log(missionsDetail)
  const [value, setValue] = React.useState(1);

  const getValue = async () => {
    let response = await axios.get(
      `${HALO_URL}/profile/mymissions/${missionId}/review`,
      { withCredentials: true }
    );
    console.log(response.data.rate);
    setValue(response.data.rate);
  };

  const fetchData = async () => {
    let response = await axios.get(`${HALO_URL}/missions/${missionId}`, {
      withCredentials: true,
    });
    setMissionsDetail(response.data);
  };

  useEffect(() => {
    fetchData();
    getValue();
  }, []);

  //---------------------------------------------------------------------------------------
  const handleReview = async (newValue) => {
    // event.preventDefault();
    let newReview = {
      rate: newValue,
    };

    let response = await axios.post(
      `${HALO_URL}/profile/mymissions/${missionId}/review`,
      newReview,
      {
        withCredentials: true,
      }
    );

    setReview([response.data, ...review]);
    Navigate("/profile/mymissions");
  };

  console.log("JoMa");

  if (!missionsDetail) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <div>
      <div className="missionTitles">
        <h1>RATE THIS MISSION</h1>
      </div>
      <div className="missionDetailsContainer reviewContainer">
        <Card style={{ width: "28rem" }}>
          <CardMedia
            component="img"
            height="140"
            image={missionsDetail.image}
            alt=""
          />
          <Card.Body>
            <Card.Title className="reviewCardTitle">
              {missionsDetail.name}
            </Card.Title>
          </Card.Body>
          <Form onSubmit={handleReview}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mission's rating:</Form.Label>
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Stack spacing={1}>
                  <Rating
                    id="ratingStars"
                    name="size-large"
                    defaultValue={2}
                    size="large"
                    value={value}
                    onChange={(event, newValue) => {
                      // event.preventDefault();
                      setValue(newValue);
                      handleReview(newValue);
                    }}
                  />
                </Stack>
              </Box>
            </Form.Group>
            <button
              className="reviewBtn"
              type="submit"
              variant="outline-success"
            >
              Save Review
            </button>{" "}
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default Reviews;
