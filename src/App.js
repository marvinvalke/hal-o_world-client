import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import MyNav from "./components/MyNav";


function App() {



  return (
    <div className="App">
      
      <MyNav /> 

      <Routes>
        <Route  path="/signin" element={<AuthPage />}/>
        <Route  path="/missions" element={<AuthPage />}/>
        <Route  path="/about" element={<AuthPage />}/>
      </Routes>
    </div>
  );
}

export default App;
