import React, { useState, useEffect } from "react";
import axios from "axios";

function ApodImg() {
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

  const { title, hdurl, date } = picture;
 
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <img src={hdurl} alt=""></img>
    </div>
  );
}

export default ApodImg;
