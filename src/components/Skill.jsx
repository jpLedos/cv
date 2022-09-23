import React from 'react'

function Skill({skill}) {
  return (
    <div className="skill">
   
        <h4 className="skill-title">{skill.title}</h4>
        <ul>
        {skill.items.map((item,index) => {
            return(
                <li key={index}>{item}</li> 
            )
        })}
        </ul>
    </div>
  )
}

export default Skill