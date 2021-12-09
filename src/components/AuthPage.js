import React from "react";
import "./AuthPage.css";
import { Link } from "react-router-dom";

function AuthPage(props) {
  const card = document.getElementById("card");

  function openRegister() {
    card.style.transform = "rotateY(-180deg)";
  }

  function openLogin() {
    card.style.transform = "rotateY(0deg)";
  }

  return (
    <div class="container">
      <div class="card">
        <div class="inner-box" id="card">
          <div class="card-front">
            <h2>LOGIN</h2>
            <form action="">
              <input
                type="email"
                class="input-box"
                placeholder="example@mail.com"
                required
              />
              <input
                type="password"
                class="input-box"
                placeholder="Password"
                required
              />
              <button type="submit" class="submit-btn">
                Submit
              </button>
              <input type="checkbox" />
              <span>Remember Me</span>
            </form>
            <button type="button" class="btn" onClick={openRegister}>
              I'm New Here
            </button>
            {/*      <Link to={}>Forget Password</Link> */}
          </div>

          <div class="card-back">
            <h2>SIGNUP</h2>
            <form action="">
              <input
                type="text"
                class="input-box"
                placeholder="Jhon"
                required
              />
              <input
                type="email"
                class="input-box"
                placeholder="example@mail.com"
                required
              />
              <input
                type="password"
                class="input-box"
                placeholder="Password"
                required
              />
              <button type="submit" class="submit-btn">
                Submit
              </button>
              <input type="checkbox" />
              <span>Remember Me</span>
            </form>
            <button type="button" class="btn" onClick={openLogin}>
              I've an account
            </button>
            {/*     <Link to="#">Forget Password</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
