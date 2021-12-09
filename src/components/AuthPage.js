import React,{useState , useEffect} from "react";
import "./AuthPage.css";

function AuthPage(props) {

  const [card, setCard] = useState(null)

  useEffect(()=>{
    setCard(document.getElementById("card"))
  },[])


  if (!card) {
    <p>LOADING</p>;
  }

  console.log(card)

  function openRegister() {
    card.style.transform = "rotateY(-180deg)";
  }

  function openLogin() {
    card.style.transform = "rotateY(0deg)";
  }

  return (
    <div className="container">
      <div className="card">
        <div className="inner-box" id="card">
          <div className="card-front">
            <h2>LOGIN</h2>
            <form action="">
              <input
                type="email"
                className="input-box"
                placeholder="example@mail.com"
                required
              />
              <input
                type="password"
                className="input-box"
                placeholder="Password"
                required
              />
              <button type="submit" className="submit-btn">
                Submit
              </button>
              <input type="checkbox" />
              <span>Remember Me</span>
            </form>
            <button type="button" className="btn" onClick={openRegister}>
              I'm New Here
            </button>
            {/*      <Link to={}>Forget Password</Link> */}
          </div>

          <div className="card-back">
            <h2>SIGNUP</h2>
            <form action="">
              <input
                type="text"
                className="input-box"
                placeholder="Jhon"
                required
              />
              <input
                type="email"
                className="input-box"
                placeholder="example@mail.com"
                required
              />
              <input
                type="password"
                className="input-box"
                placeholder="Password"
                required
              />
              <button type="submit" className="submit-btn">
                Submit
              </button>
              <input type="checkbox" />
              <span>Remember Me</span>
            </form>
            <button type="button" className="btn" onClick={openLogin}>
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
