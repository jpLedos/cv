import React from 'react';
import dataSkills from "../datas/Skills";
import Skill from "./Skill";

import "./Skills.css";


function Skills() {

  return (
    <div className="skills">

        {dataSkills.map((skill) => {
            return(
                <Skill key = {skill.id} skill={skill} />
            )
        })}
    </div>
  )
}

export default Skills