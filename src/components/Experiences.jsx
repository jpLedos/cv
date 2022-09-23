import React from 'react'

import dataExperiences from "../datas/Experiences";
import Experience from "./Experience";

import "./Experiences.css"


function Experiences() {

    return (
      <div className="experiences">
        <h3 className="h3">Parcours professionnel</h3>
          {dataExperiences.map((experience) => {
              return(
                  <Experience key = {experience.id} experience={experience} />
              )
          })}
      </div>
    )
}

export default Experiences