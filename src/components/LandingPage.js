import React from "react";
import Chatbot from "./ChatBot";
import { Link } from "react-router-dom";
import './Profile.css';
import './LandingPage.css'

function LandingPage() {
  return (
    <div>
    <h1 className="landing-page-welcome" >Welcome to Hal-0 World,</h1>
    <h1 className="">where you'll find your next space mission.</h1>
     <Link to="/solar-system" className="avatar" color="inherit">
        Explore our solar system
      </Link>
      <Link className="avatar" to="/apod"> APOD</Link>
      <Chatbot />

    </div>
  );
}

export default LandingPage;
