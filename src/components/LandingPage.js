import React from 'react';
import { Routes, Route } from "react-router-dom";
import MyNav from './MyNav';
import AuthPage from './AuthPage';
import AboutPage from './AboutPage';
import Missions from './Missions';
import {useState, useEffect} from 'react'
import axios from "axios";
import {API_URL} from './config';

function LandingPage(props) {

    
  const [missions, setMissions] = useState([]) //to store missions info

        //create useEffect to mount missions component and fetch info into api/db
        useEffect(() => {
            const fetchData = async () => {
            let response  = await axios.get(`${API_URL}/missions`, {withCredentials: true})
            console.log(response.data)
            
        }
        fetchData()
        }, [])


    return (
        <div>
            <MyNav /> 

            <Routes>
            <Route  path="/signin" element={<AuthPage />}/>
            <Route  path="/missions" element={<Missions missions={missions} />}/>
            <Route  path="/about" element={<AboutPage />}/>
            </Routes>
        </div>
    )
}

export default LandingPage
