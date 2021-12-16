import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HALO_URL } from "../config";
import axios from "axios";
import { Spinner, Form } from "react-bootstrap";
import DifficultyLevel from "./DifficultyLevel";

function EditMission(props) {
  const { missionId } = useParams();
  const [missionsDetail, setMissionsDetail] = useState(missionId);
  const { editButton } = props;

  //-----axios req to fetch info from the selected mission--------------
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(`${HALO_URL}/missions/${missionId}`, {
        withCredentials: true,
      });
      setMissionsDetail(response.data);
    };
    fetchData();
  }, []);
  //--------------------------------------------------------------------
  //------------------loading content from api -------------------------
  if (!missionsDetail) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  //-------------------------------------------------------------------

  return (
    <div className="test">
      <Form
        onSubmit={(event) => {
          editButton(event, missionsDetail._id);
        }}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Mission's name:</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder={missionsDetail.name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mission's description:</Form.Label>
          <Form.Control
            name="description"
            as="textarea"
            placeholder="Insert mission's description"
            rows={2}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Mission's image:</Form.Label>
          <Form.Control
            type="file"
            name="myImage"
            accept="image/png, image/jpg"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Mission's duration:</Form.Label>
          <Form.Control
            name="duration"
            type="text"
            placeholder={missionsDetail.duration}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Mission's difficulty:</Form.Label>
          <DifficultyLevel />
        </Form.Group>
        {/* <Link to={'/profile/mymissions'} > */}
        <button class="avatar2" type="submit" variant="outline-success">
          Save changes
        </button>{" "}
        {/* </Link> */}
      </Form>
    </div>
  );
}

export default EditMission;
