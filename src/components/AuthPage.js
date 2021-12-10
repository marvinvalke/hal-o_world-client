import React, { useState, useEffect } from "react";
import "./AuthPage.css";
import { FormHelperText } from "@mui/material";

function AuthPage(props) {
  const { onSignIn, onRegister } = props;
  const [card, setCard] = useState(null);

  useEffect(() => {
    setCard(document.getElementById("card"));
  }, []);

  if (!card) {
    <p>LOADING</p>;
  }


  function openRegister() {
    card.style.transform = "rotateY(-180deg)";
  }



  function openLogin() {
      card.style.transform = "rotateY(0deg)";
    }

  return (
    <div className="login-container">
      <div className="card">
        <div className="inner-box" id="card">
          <div className="card-front">
            <h2>LOGIN</h2>
            {/* --------------------- LOG IN FORM --------------------------------*/}
            <form onSubmit={onSignIn} >
              <input
                type="email"
                name="email"
                className="input-box"
                placeholder="example@mail.com"
                required
              />
              <input
                type="password"
                name="password"
                className="input-box"
                placeholder="Password"
                required
                FormHelperText={props.myError ? props.myError : ""}
                error={props.myError ? true : false}
              />
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
            {/*-------------- SWITCH TO REGISTER FORM ---------------------*/}
            <button type="button" className="flip-btn" onClick={openRegister}>
              I'm New Up Here 
            </button>
          </div>
          {/* --------------------- REGISTER FORM --------------------------------*/}
          <div className="card-back">
            <h2>SIGNUP</h2>
            <form onSubmit={onRegister} >
              <input
                type="text"
                name="username"
                className="input-box"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                className="input-box"
                placeholder="example@mail.com"
                required
              />
              <input
                type="password"
                name="password"
                className="input-box"
                placeholder="Password"
                required
              />
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
            <button type="button" className="flip-btn" onClick={openLogin}>
              I'm already an Astronaut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
