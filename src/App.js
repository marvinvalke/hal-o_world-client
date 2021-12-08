import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage";


function App() {
  return (
    <div className="App">
    {/* <NavBar /> */}

      <Routes>
        <Route  path="/signin" element={<AuthPage myError={myError} onSignIn={handleSignIn}/>}/>
        <Route  path="/signup" element={<AuthPage />}/>
      </Routes>
    </div>
  );
}

export default App;
