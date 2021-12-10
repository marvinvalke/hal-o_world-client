
import LandingPage from "./components/LandingPage";
import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { HALO_URL } from "./config";
import axios from "axios";
import { UserContext } from "./context/app.context";
import AuthPage from "./components/AuthPage";
import AboutPage from './components/AboutPage';
import Missions from './components/Missions';
import Profile from "./components/Profile";
import Apod from "./components/Apod";
import ApodImg from "./components/ApodImg";


function App() {
  // STATES HOOKS AND CONTEXT----------------------------
  const { user, setUser } = useContext(UserContext);
  const [myError, setError] = useState(null);
  const navigate = useNavigate();
  //-----------------------------------------------

  // SIGN IN FUNCTION---------------------------
  async function handleSignIn(event) {
    event.preventDefault();
    try {
      let newUser = {
        email: event.target.email.value,
        password: event.target.password.value,
      };

      let response = await axios.post(`${HALO_URL}/signin`, newUser, {
        withCredentials: true,
      });
      setUser(response.data);
      navigate('/profile')
    } catch (err) {
      //console.log(err.response)
      setError(err.response.data);
    }
  }
  //--------------------------------------------

  // REGISTER FUNCTION---------------------------

  async function handleRegister(event){
    event.preventDefault()

    let newUser = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value
    }

    await axios.post(`${HALO_URL}/signup`, newUser, {withCredentials: true})  
    navigate('/')


  }
  //-------------------------------------------------

// MISSIONS PAGE------------------------------------------------------------------
  const [missions, setMissions] = useState([]) //to store missions info

        //create useEffect to mount missions component and fetch info into api/db
        useEffect(() => {
            const fetchData = async () => {
            let response  = await axios.get(`${HALO_URL}/missions`, {withCredentials: true})
            setMissions(response.data)
            
        }
        fetchData()
        }, [])
  //-------------------------------------------------

  return (
    <div className="App">
      
      <LandingPage />
      <Routes>
        <Route
          path="/signin"
          element={<AuthPage myError={myError} onSignIn={handleSignIn} onRegister={handleRegister}/>}
        />
        <Route  path="/missions" element={<Missions missions={missions} />}/>
        <Route  path="/about" element={<AboutPage />}/>
        <Route  path="/profile" element={<Profile />}/>
        <Route  path="/apod" element={<Apod />}/>
        <Route  path="/apod/img" element={<ApodImg />}/>
      </Routes>
    </div>
  );
}

export default App;
