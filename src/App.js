import LandingPage from "./components/LandingPage";
import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { HALO_URL } from "./config";
import axios from "axios";
import { UserContext } from "./context/app.context";
import AuthPage from "./components/AuthPage";
import AboutPage from "./components/AboutPage";
import Missions from "./components/Missions";
import Profile from "./components/Profile";
import Apod from "./components/Apod";
import MissionsDetails from "./components/MissionsDetails";
import EditMission from "./components/EditMission";
import StarrySky from "./components/Stars";
import ProfileEdit from "./components/ProfileEdit";
import MyNav from "./components/MyNav";
import MyMissions from "./components/MyMissions";
import CreateMissions from "./components/CreateMissions";
import SolarSystem from "./components/SolarSystem";
import NotFound from "./components/NotFound";
import Reviews from "./components/Reviews";

function App() {
  // STATES HOOKS AND CONTEXT----------------------------
  const { user, setUser } = useContext(UserContext);
  const [myError, setError] = useState(null);
  const [missions, setMissions] = useState([]);
  const [missionsCopy, setMissionsCopy] = useState(missions);
  const [applyMission, setApplyMission] = useState(missions);
  const navigate = useNavigate();
  const [bDayPic, setBDayPic] = useState(null);
  const [createdMission, setCreatedMission] = useState([]);
  //-----------------------------------------------

  const fetchUser = async () => {
    let response = await axios.get(`${HALO_URL}/profile`, {
      withCredentials: true,
    });
    setUser(response.data);
  };

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
      navigate("/profile");
    } catch (err) {
      //console.log(err.response)
      setError(err.response.data);
    }
  }
  //--------------------------------------------

  // REGISTER FUNCTION---------------------------

  async function handleRegister(event) {
    event.preventDefault();

    let newUser = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    await axios.post(`${HALO_URL}/signup`, newUser, { withCredentials: true });
    navigate("/");
  }
  //-------------------------------------------------

  // CONDITIONAL RENDERING OF USER CHANGES------------
  // useEffect(() => {
  //   navigate("/");
  // }, [user]);
  //------------

  // EDIT BUTTON HANDLING-------------------------------
  const handleEdit = async (event, id) => {
    event.preventDefault();
    // console.log(event.target.myImage.files[0])
    let formData = new FormData();
    formData.append("imageUrl", event.target.myImage.files[0]);
    //uploading the image to cloudinary first
    let imgResponse = await axios.post(`${HALO_URL}/upload`, formData);

    let editedMission = {
      name: event.target.name.value,
      image: imgResponse.data.image,
      description: event.target.description.value,
      duration: event.target.duration.value,
      difficulty: event.target.difficulty.value,
    };

    let response = await axios.patch(
      `${HALO_URL}/profile/mymissions/${id}`,
      editedMission,
      { withCredentials: true }
    );

    let updatedMissions = missionsCopy.map((elem) => {
      if (elem._id == id) {
        elem.name = response.data.name;
        elem.image = response.data.image;
        elem.description = response.data.description;
        elem.duration = response.data.duration;
        elem.difficulty = response.data.difficulty;
      }
      return elem;
    });

    setMissions(updatedMissions);
    navigate("/profile/mymissions");
  };

  //-------------------------------------------------------------

  //--------EDIT PROFILE FUNCTION-------------------

  const handleEditUser = async (event, id) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("imageUrl", event.target.myImage.files[0]);

    let imgResponse = await axios.post(`${HALO_URL}/upload`, formData);

    let editedUser = {
      username: event.target.username.value,
      profilePic: imgResponse.data.image,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    let response = await axios.patch(
      `${HALO_URL}/profile/${id}/edit`,
      editedUser,
      {
        withCredentials: true,
      }
    );

    await fetchUser();
    setUser(response.data);
    navigate("/profile");
    console.log("is it working ?", user);
  };

  //-------------------------------------------------

  // APPLY BUTTON HANDLING-------------------------------
  const applyClick = async (event, id) => {
    await axios.post(
      `${HALO_URL}/profile/mymissions`,
      { id },
      { withCredentials: true }
    );
  };
  //-------------------------------------------------------------

  // CREATE BUTTON HANDLING-------------------------------
  const handleCreate = async (event) => {
    event.preventDefault();

    // console.log(event.target.myImage.files[0])
    let formData = new FormData();
    formData.append("imageUrl", event.target.myImage.files[0]);
    //uploading the image to cloudinary first
    let imgResponse = await axios.post(`${HALO_URL}/upload`, formData);

    console.log(event.target.duration.value);
    let newMission = {
      name: event.target.name.value,
      description: event.target.description.value,
      image: imgResponse.data.image,
      duration: event.target.duration.value,
      difficulty: event.target.difficulty.value,
    };
    console.log(newMission);
    let response = await axios.post(
      `${HALO_URL}/profile/mymissions/create`,
      newMission,
      { withCredentials: true }
    );
    setCreatedMission([response.data, ...createdMission]);
    navigate("/profile/mymissions");
  };
  //-------------------------------------------------------------

  //-----DELETE MISSION FROM PROFILE------------------------------------------------------
  const handleDelete = async (id) => {
    await axios.delete(`${HALO_URL}/profile/mymissions/${id}`, {
      withCredentials: true,
    });

    let filteredMissions = applyMission.filter((elem) => {
      return elem._id !== id;
    });

    setApplyMission(filteredMissions);
    navigate("/profile");
  };

  //-----LOG OUT FUNCTION------------------------------------------------------
  const handleLogout = async () => {
    await axios.post(`${HALO_URL}/logout`, {}, { withCredentials: true });
    setUser(null);
  };
  //---------------------------------------------------------------------------
  console.log(createdMission);
  return (
    <div className="App">

      <StarrySky />
      <MyNav onLogout={handleLogout} />
      <Routes>
      <Route path="*" element={<NotFound />}/>    
        <Route
          path="/signin"
          element={
            <AuthPage
              myError={myError}
              onSignIn={handleSignIn}
              onRegister={handleRegister}
            />
          }
        />
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route
          path="/profile/:id/edit"
          element={<ProfileEdit btnEdit={handleEditUser} />}
        />
        <Route path="/apod" element={<Apod />} />

        <Route
          path="/missions"
          element={<Missions applyClick={applyClick} editButton={handleEdit} />}
        />
        <Route path="/missions/:missionId" element={<MissionsDetails />} />
        <Route
          path="/missions/:missionId/edit"
          element={<EditMission editButton={handleEdit} />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/mymissions/" element={<MyMissions missionCreated={createdMission} deleteButton={handleDelete}/>}/>
        <Route path="/profile/mymissions/:missionId/review" element={<Reviews />}/>
        <Route path="/profile/mymissions/create" element={<CreateMissions createButton={handleCreate} />}/>
        <Route path="/apod" element={<Apod />} />
        <Route path="/solar-system" element={<SolarSystem />} />
             
      </Routes>
    </div>
  );
}

export default App;
