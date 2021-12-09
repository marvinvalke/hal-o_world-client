import React from 'react'
import "./AuthPage.css";
import {Link} from 'react-router-dom';

function AuthPage(props) {

    const {onSignIn} = props

    //----------this is for handling animation on form---------//
    function toggleForm() {
        var container = document.querySelector(".container");
        container.classList.toggle("active");
      }
    //--------------------------------------------------------//


    return (
        <div class="container">
        <div class="user signinBx">
          <div class="imgBx"><img src="https://images.unsplash.com/photo-1576859958081-27de5c70262a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" /></div>
          <div class="formBx">
            <form onSubmit={onSignIn}>
              <h2>Sign In</h2>
              <input type="text" name="" placeholder="Username" />
              <input type="password" name="" placeholder="Password" />
              <input type="submit" name="" value="Login" />
              <p class="signup">
                Don't have an account ?<Link to={"#"} onclick={toggleForm()}>
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div class="user signupBx">
          <div class="formBx">
            <form>
              <h2>Create an Account</h2>
              <input type="text" name="" placeholder="Username" />
              <input type="email" name="" placeholder="Email Id" />
              <input type="password" name="" placeholder="Create Password" />
              <input type="password" name="" placeholder="Confirm Password" />
              <input type="submit" name="" value="Sign Up" />
              <p class="signup">
                Already have an account ?
                <Link to={"#"} onclick={toggleForm()}> Sign In </Link>
              </p>
            </form>
          </div>
          <div class="imgBx"><img src="https://images.unsplash.com/photo-1628972799193-1a6be77e183e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" /></div>
        </div>
      </div>
    )
}

export default AuthPage
