import React from "react";
import Chatbot from "./ChatBot";
import MyNav from "./MyNav";
import Profile from "./Profile";
// import {Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <div>
     <Link to="/solar-system" className="nav-link" color="inherit">
        Explore our solar system
      </Link>
      <Link className="nav-link" to="/apod"> APOD</Link>
      <Chatbot />

    </div>
  );
}

export default LandingPage;
