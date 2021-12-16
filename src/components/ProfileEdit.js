import React, { useState, useEffect } from "react";
import { HALO_URL } from "../config";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Spinner, Form, Button } from "react-bootstrap";

function ProfileEdit(props) {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const { btnEdit } = props;
  // console.log(user)
  useEffect(() => {
    async function getData() {
      let response = await axios.get(`${HALO_URL}/profile`, {
        withCredentials: true,
      });
      setUser(response.data);
    }

    getData();
  }, []);

  if (!user) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div>
      <div className="missionTitles">
        <h1>Profile Edit Form</h1>
      </div>

      <form
        onSubmit={(event) => {
          btnEdit(event, user._id);
        }}
      >
        <div className="profile">
          <div class="container mt-6 mb-4 p-4 d-flex justify-content-center">
            <div class="cardProfileEdit p-4">
              <div class="  d-flex flex-column justify-content-center align-items-center">
                {" "}
                <img
                  class="btn btn-secondary avatar profilePicEdit"
                  src={user.profilePic}
                  height="120"
                  width="120"
                  alt=""
                />
                <div id="profileEditCard" class="input-group">
                  <div class="input-group-prepend">
                    <input
                      defaultValue={user.username}
                      name="username"
                      type="text"
                      aria-label="First name"
                      class="form-control"
                    />
                  </div>
                  <div class="input-group-prepend">
                    <input
                      defaultValue={user.email}
                      name="email"
                      type="text"
                      aria-label="email"
                      class="form-control"
                    />
                  </div>
                  <div class="input-group-prepend">
                    <input
                      defaultValue="Enter your password"
                      name="password"
                      type="text"
                      aria-label="Enter Password"
                      class="form-control"
                    />
                  </div>
                </div>
                <div>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="profilePictureLabel">Profile Picture:</Form.Label>
                    <Form.Control
                      type="file"
                      name="myImage"
                      accept="image/png, image/jpg"
                    />
                  </Form.Group>
                </div>
              </div>
              <button className="profileBtn" type="submit">
                {" "}
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProfileEdit;
