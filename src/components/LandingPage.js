import React from "react";
import Chatbot from "./ChatBot";
import { Link } from "react-router-dom";
import './Profile.css';
import './LandingPage.css'

function LandingPage() {
  return (
    <div>
    <h1 className="landing-page-welcome" >Welcome to <h1 className="hal-o-world"> Hal-0 World</h1>, <br/>the place to find your next space mission.</h1>
    
     <button class="btn btn-secondary avatar">
     <Link to="/solar-system" className="avatar" color="inherit">
        Explore our solar system
      </Link>
      </button>
      <button class="btn btn-secondary avatar">
      <Link className="avatar" to="/apod"> APOD</Link>
      </button>
      <Chatbot />

    </div>
  );
}

export default LandingPage;
