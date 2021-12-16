import React, { useState, useEffect } from "react";
import { HALO_URL } from "../config";
import axios from "axios";
import { Link } from "react-router-dom";
import {Spinner} from "react-bootstrap";

import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);



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
    <div className="profile">
     <div className="missionTitles">
      <h1>Hello {user.username}</h1>
     </div>
      <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div class="cardProfile p-4">
          <div class=" image d-flex flex-column justify-content-center align-items-center">
            {" "}
            <button id="profilePicBubble" class="btn btn-secondary avatar">
              {" "}
              <img className="profilePic"
                src={user.profilePic}
                height="100"
                width="100"
                alt=""
              />
            </button>{" "}
           
              <button >
                <Link className="profileBtn" to={`/profile/${user._id}/edit`}>Edit my profile</Link>
              </button>{" "}
            </div>
            <button>
              <Link className="profileBtn" to={`/profile/mymissions`}>My Missions</Link>
            </button>
            <button>
              <Link className="profileBtn" to={`/profile/mymissions/create`}>Create Missions</Link>
            </button>
            <div class=" d-flex mt-2">
              {" "}
          </div>
        </div>
      </div>
      {/*  <TextField
        id="filled-read-only-input"
        label="Username"
        defaultValue={user.username}
        InputProps={{
          readOnly: true,
        }}
        variant="filled"
      />
      <TextField
        id="filled-read-only-input"
        label="email"
        defaultValue={user.email}
        InputProps={{
          readOnly: true,
        }}
        variant="filled"
      /> */}
    </div>
  );
}

export default Profile;
