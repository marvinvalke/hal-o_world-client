import React, { useState, useEffect } from "react";
import { HALO_URL } from "../config";
import axios from "axios";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Spinner,
  Card,
  ListGroup,
  ListGroupItem,
  Accordion,
  Button,
} from "react-bootstrap";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
      <h3>Edit Profile</h3>
      <form
        onSubmit={(event) => {
          btnEdit(event, user._id);
        }}
      >
        <input
          defaultValue={user.username}
          name="username"
          type="text"
          placeholder="Enter a username"
        />
        <input
          defaultValue={user.email}
          name="email"
          type="text"
          placeholder="Enter your email"
        />
        <input
          defaultValue={user.password}
          name="password"
          type="text"
          placeholder="Enter your password"
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}

export default ProfileEdit;
