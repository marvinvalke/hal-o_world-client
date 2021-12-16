import React from "react";
import Chatbot from "./ChatBot";
import { Link } from "react-router-dom";
import "./Profile.css";
import "./LandingPage.css";


function LandingPage() {
  return (
    <div className="landingPage">
      <h1 className="landing-page-welcome">
        Welcome to{" "}
        <h1 className="hal-o-world">
          {" "}
          Hal-0 World
          <br />
          2021 A SPACE ODYSSEY
        </h1>
      </h1>
      <div className="welcomeTextContainer">
        <p className="welcomeText">
          the place to find your next space mission.
        </p>
      </div>
      <div className="landingBtn">
          <Link to="/solar-system" className="avatarLink">
        <button class="avatar2">
            Explore our solar system
        </button>
          </Link>
          <Link className="avatarLink" to="/apod">
        <button class="avatar2">
            APOD
        </button>
          </Link>
      </div>
      <Chatbot />
    </div>
  );
}

export default LandingPage;
