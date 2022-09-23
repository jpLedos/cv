import React from "react";
import "./App.css";
import Profil from "./components/Profil";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";

function App() {
  return (
    <div className="App">
      <Profil />
      <div className="skills-experiences-container">
        <Skills />
        <Experiences />
      </div>
    </div>
  );
}

export default App;
