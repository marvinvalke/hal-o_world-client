import React from "react";
import Chatbot from "./ChatBot";
import { Link } from "react-router-dom";
import './Profile.css';


function LandingPage() {
  return (
    <div>
    <h1>Hello Astronaut! </h1>
    <h1>Buckle-up, because you're in for the ride of your life.</h1>
     <Link to="/solar-system" className="avatar" color="inherit">
        Explore our solar system
      </Link>
      <Link className="avatar" to="/apod"> APOD</Link>
      <Chatbot />

    </div>
  );
}

export default LandingPage;
