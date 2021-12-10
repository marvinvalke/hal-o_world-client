import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Link} from 'react-router-dom';
// https://api.nasa.gov/planetary/apod?api_key=ClLBm5CAJZEUZvW0bmgTHSMLbsmq7jYuJE5Xkw6F

function Apod() {
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    async function getData() {
      let response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=ClLBm5CAJZEUZvW0bmgTHSMLbsmq7jYuJE5Xkw6F`
      );

      setPicture(response.data);
    }
    getData();
  }, []);

  if (!picture) {
    return <p>LOADING</p>;
  }

  console.log(picture);
  const { title, hdurl, date, explanation } = picture;
  return (
    <div>
      <h1>APOD</h1>
      <Card sx={{ maxWidth: 345 }}>
        <Link to="/apod/img"><CardMedia
          component="img"
          height="140"
          image={hdurl}
          alt="green iguana"
        /></Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {explanation}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Apod;
