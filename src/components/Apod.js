import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// https://api.nasa.gov/planetary/apod?api_key=ClLBm5CAJZEUZvW0bmgTHSMLbsmq7jYuJE5Xkw6F
import { HALO_URL } from "../config";

function Apod(props) {
  const [picture, setPicture] = useState(null);
  const [bDayPic, setBDayPic] = useState(null);
  const [dateEntered, setDateEntered] = useState(false);

  // APOD FUNCTION---------------------------

  async function handleDate(event) {
    event.preventDefault();

    let date = {
      day: event.target.day.value,
      month: event.target.month.value,
    };

    if (date.day < 10) {
      date.day = "0" + date.day;
    }
    if (date.month < 10) {
      date.month = "0" + date.month;
    }
    let response = await axios.post(`${HALO_URL}/nasa/bdaypic`, date);
    setBDayPic(response.data);
    setDateEntered(true);
  }

  useEffect(() => {
    async function getData() {
      let response = await axios.get(`${HALO_URL}/nasa`);

      setPicture(response.data);
    }
    getData();
  }, []);

  if (!picture) {
    return <p>LOADING</p>;
  }

  const { title, url, date, explanation } = picture;
  console.log(picture);
  console.log(dateEntered);
  return (
    <div>
      <h1>APOD</h1>

      {dateEntered ? (
        <>
          <Card sx={{ maxWidth: 345 }}>
            <Link to={bDayPic.url}>
              <CardMedia
                component="img"
                height="140"
                image={bDayPic.url}
                alt="green iguana"
              />
            </Link>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {bDayPic.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {bDayPic.date}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {bDayPic.explanation}
              </Typography>
            </CardContent>
          </Card>
        </>
      ) : (
        <>
          <Card sx={{ maxWidth: 345 }}>
            <Link to="/apod/img">
              <CardMedia
                component="img"
                height="140"
                image={url}
                alt="green iguana"
              />
            </Link>
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

          <form onSubmit={handleDate}>
            <input name="day" type="number" placeholder="Enter day" />
            <input name="month" type="number" placeholder="Enter month" />

            <Button type="submit">Submit</Button>
          </form>
        </>
      )}
    </div>
  );
}

export default Apod;
