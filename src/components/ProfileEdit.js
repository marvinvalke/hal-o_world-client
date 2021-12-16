import React, { useState, useEffect } from "react";
import { HALO_URL } from "../config";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

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
            <div class="card p-4">
              <div class="  d-flex flex-column justify-content-center align-items-center">
                {" "}
                <span class="name "> Hello {user.username} ! </span>{" "}
                <button class="btn btn-secondary avatar">
                  {" "}
                  <img src={user.profilePic} height="120" width="120" alt="" />
                </button>{" "}
                <div id="profileEditCard" class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Username</span>
                  <input
                    defaultValue={user.username}
                    name="username"
                    type="text"
                    aria-label="First name"
                    class="form-control"
                  />
                  </div>
                  <div class="input-group-prepend">
                    <span class="input-group-text">Email</span>
                  <input
                    defaultValue={user.email}
                    name="email"
                    type="text"
                    aria-label="email"
                    class="form-control"
                  />
                  </div>
                  <div class="input-group-prepend">
                    <span class="input-group-text">Password</span>
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
                  <input
                    type="file"
                    name="myImage"
                    accept="image/png, image/jpg"
                  />
                </div>
              </div>
              <button type="submit"> Update</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProfileEdit;
