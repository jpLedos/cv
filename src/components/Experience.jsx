import React from 'react'

function Experience({experience}) {

  return (
    <div className="experience">
   
        <h4 className="experience-title">{experience.title}</h4>
        <p className="period">{experience.period}</p>
        <ul>
        {experience.missions.map((item,index) => {
            return(
                <li key={index}>{item}</li> 
            )
        })}
        </ul>
    </div>
  )
}

export default Experience