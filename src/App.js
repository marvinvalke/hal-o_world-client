import React from "react";
import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import AuthPage from "./components/AuthPage";
import Missions from "./components/Missions";
import MyNav from "./components/MyNav";
import axios from "axios";
import {API_URL} from './config';


function App() {

  const [missions, setMissions] = useState([]) //to store missions info

          //create useEffect to mount missions component and fetch info into api/db
          useEffect(() => {
            const fetchData = async () => {
              let response  = await axios.get(`${API_URL}/missions`, {withCredentials: true})
              setMissions(response.data)
              
          }
          fetchData()
          }, [])

  return (
    <div className="App">
      
      <MyNav /> 

      <Routes>
        <Route  path="/signin" element={<AuthPage />}/>
        <Route  path="/missions" element={<Missions missions={missions} />}/>
        <Route  path="/about" element={<AuthPage />}/>
      </Routes>
    </div>
  );
}

export default App;
