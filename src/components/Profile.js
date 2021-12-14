import React, { useState, useEffect } from "react";
import { HALO_URL } from "../config";
import axios from "axios";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Spinner,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Profile.css";

function Profile(props) {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const { applyMission } = props;
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
    <div className="profile">
      <h1>Hello {user.username}</h1>
      <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div class="card p-4">
          <div class=" image d-flex flex-column justify-content-center align-items-center">
            {" "}
            <button class="btn btn-secondary">
              {" "}
              <img
                src={user.profilePic}
                height="100"
                width="100"
                alt=""
              />
            </button>{" "}
            <span class="name mt-3">{user.username}</span>{" "}
            <span class="idd">{user.email}</span>
              <button >
                <Link to={`/profile/${user._id}/edit`}>Edit my profile</Link>
              </button>{" "}
            </div>
            <button>
              <Link to={`/profile/mymissions`}>My Missions</Link>
            </button>
            <button>
              <Link to={`/profile/mymissions/create`}>Create Missions</Link>
            </button>
            <div class=" d-flex mt-2">
              {" "}
          </div>
        </div>
      </div>

      <img src={user.profilePic} alt="" />
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
