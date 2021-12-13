import React, { useState, useEffect } from "react";
import axios from "axios";
import { HALO_URL } from "../config";

function ApodImg() {
  const [picture, setPicture] = useState(null);
  const [bDayPic, setBDayPic] = useState(null);
  const [dateEntered, setDateEntered] = useState(false);

  useEffect(() => {
    async function getData() {
      let response = await axios.get(`${HALO_URL}/nasa`);

      setPicture(response.data);
    }
    getData();
  }, []);

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

  if (!picture) {
    return <p>LOADING</p>;
  }

  const { title, hdurl, date } = picture;

  return (
    <div>
      {dateEntered ? (
        <>
          <img src={bDayPic.hdurl} alt=""></img>
        </>
      ) : (
        <>
          {" "}
          <img src={hdurl} alt=""></img>{" "}
        </>
      )}
    </div>
  );
}

export default ApodImg;
