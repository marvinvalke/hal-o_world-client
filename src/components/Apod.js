import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// https://api.nasa.gov/planetary/apod?api_key=ClLBm5CAJZEUZvW0bmgTHSMLbsmq7jYuJE5Xkw6F
import { HALO_URL } from "../config";
import { Card } from "react-bootstrap";

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

  function handleGoBack(event) {
    event.preventDefault();
    async function getData() {
      let response = await axios.get(`${HALO_URL}/nasa`);

      setPicture(response.data);
      setDateEntered(false);
    }
    getData();
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
    <div className="apodComponent">
      <div className="missionTitles">

      <h1>Astronomical Picture Of the Day</h1>

      </div>

      {/*       width: 300,
        color: 'success.main',
        '& .MuiSlider-thumb': {
          borderRadius: '1px',
        }, */}
        <div className="apodCard">

      {dateEntered ? (
        <>
        <Card style={{ width: "45rem", height:"40rem"}}>
            <a href={bDayPic.url} target="_blank">
              <CardMedia
                component="img"
                height="340"
                image={bDayPic.url}
                alt=""
              />
            </a>
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
          <button className="applyBtn"  type="submit" onClick={handleGoBack}>
            Go Back
          </button>
        </>
      ) : (
        <>
        <Card style={{ width: "45rem", height:"40rem"}}>
            <a href={url} target="_blank">
              <CardMedia component="img" height="340" image={url} alt="" />
            </a>
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

          <div className="missionTitles">

      <h1 className="apodH1" >Check The Astronomical Picture of your Birthday</h1>

      </div>

          <form  onSubmit={handleDate}>
            <div className="apodBdayForm">
            <input className="bDayInput"
              name="day"
              min="1"
              max="31"
              type="number"
              placeholder="Enter your day"
            />
          
            <input className="bDayInput"
              name="month"
              min="1"
              max="12"
              type="number"
              placeholder="Enter your month"
            />
            </div>
            <button className="applyBtn"  type="submit">Submit</button>
          </form>
        </>
      )}

        </div>
    </div>
  );
}

export default Apod;
