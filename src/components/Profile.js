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
      <p>Hello </p>
      <div class="container mt-6 mb-4 p-4 d-flex justify-content-center">
        <div class="card p-4">
          <div class="  d-flex flex-column justify-content-center align-items-center">
            {" "}
            <span class="name "> Hello {user.username} ! </span>{" "}
            <button class="btn btn-secondary avatar">
              {" "}
              <img
                src={user.profilePic}
                height="120"
                width="120"
                alt=""
              />
            </button>{" "}
            
            {/* <span class="idd">{user.email}</span> */}
              <button >
                <Link to={`/profile/${user._id}/edit`}>Edit my profile</Link>
              </button>
            </div>
            <button>
              <Link to={`/profile/mymissions`}>My Missions</Link>
            </button>
            <button>
              <Link to={`/profile/mymissions/create`}>Create Missions</Link>
            </button>            
        </div>
      </div>     
    </div>
  );
}

export default Profile;
