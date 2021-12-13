import React, { useState, useEffect } from "react";
import { HALO_URL } from "../config";
import axios from 'axios'
import {useParams, Link, Navigate} from 'react-router-dom'
import {Spinner, Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


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
    <div>
      <h1>Hello {user.username}</h1>
      <TextField
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
      />
      <button>
        <Link to={`/profile/mymissions`}>My Missions</Link>
      </button>
      <button>
        <Link to={`/missions/create`}>Create Missions</Link>
      </button>
      <button>
        <Link to={`/profile/${user._id}/edit`}>Edit my profile</Link>
      </button>

      
    </div>
  );
}

export default Profile;
