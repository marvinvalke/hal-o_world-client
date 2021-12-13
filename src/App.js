
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
import MissionsDetails from "./components/MissionsDetails";
import EditMission from "./components/EditMission";
import StarrySky from "./components/Stars";


function App() {
  // STATES HOOKS AND CONTEXT----------------------------
  const { user, setUser } = useContext(UserContext);
  const [myError, setError] = useState(null); 
  const [missions, setMissions] = useState([]);
  const [applyMission, setApplyMission] = useState(missions);
  const navigate = useNavigate();
  const [bDayPic , setBDayPic] = useState(null);
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

 // CONDITIONAL RENDERING OF USER CHANGES------------
  useEffect(() => {
    navigate('/')
  }, [user])
  //-------------------------------------------------------------

  // CONDITIONAL RENDERING OF USER CHANGES------------
  useEffect(() => {
    navigate('/missions')
  }, [missions])
  //-------------------------------------------------------------

  // EDIT BUTTON HANDLING-------------------------------
  const handleEdit = async (event, id) => {
    event.preventDefault()
    let editedMission = {
      name: event.target.name.value,
      image: event.target.image.value,
      description: event.target.description.value,
      duration: event.target.duration.value,
      difficulty: event.target.difficulty.value,
    }
    
    let response = await axios.patch(`${HALO_URL}/missions/${id}`, editedMission, {withCredentials: true})
 
    let updatedMissions = missions.map((elem) => {
        if (elem._id == id) {
            elem.name = response.data.name           
            elem.image = response.data.image
            elem.description = response.data.description
            elem.duration = response.data.duration
            elem.difficulty = response.data.difficulty
        }
        return elem
    })

    setMissions(updatedMissions)
}
  //-------------------------------------------------------------

  // APPLY BUTTON HANDLING-------------------------------
    const applyClick = async (event, mission) => {

      
      // let response = await axios.get(`${HALO_URL}/profile/${id}`,  {withCredentials: true})

      let response = await axios.post(`${HALO_URL}/profile/missions`, {mission: mission}, {withCredentials: true});

      // let appliedMissions = missions.map((elem) =>{
      //   if (elem._id == id) {
      //     elem.name = response.data.name           
      //     elem.image = response.data.image
      //     elem.description = response.data.description
      //     elem.duration = response.data.duration
      //     elem.difficulty = response.data.difficulty
      // }
      // return elem
      // })                  
      // setApplyMission(appliedMissions)
      // console.log(appliedMissions)
    }
  //-------------------------------------------------------------

  return (
    <div className="App">
      
      <LandingPage />
      <StarrySky />
      <Routes>
        <Route
          path="/signin"
          element={<AuthPage myError={myError} onSignIn={handleSignIn} onRegister={handleRegister}/>}
        />
        <Route  path="/missions" element={<Missions applyClick={applyClick} />}/>
        <Route  path="/missions/:missionId" element={ <MissionsDetails  /> }/>
        <Route  path="/missions/:missionId/edit" element={ <EditMission editButton={handleEdit}/> }/>
        <Route  path="/about" element={<AboutPage />}/>
        <Route  path="/profile" element={<Profile applyMission={applyMission} />}/>
        <Route  path="/apod" element={<Apod />}/>
        <Route  path="/apod/img" element={<ApodImg />}/>
      </Routes>
    </div>
  );
}

export default App;
