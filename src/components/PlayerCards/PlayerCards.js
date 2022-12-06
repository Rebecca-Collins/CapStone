import React from 'react'
import beela from "../../assets/images/beela.jpeg";

function PlayerCards({first_name, last_name, age, height, description, position, image}) {
  return (
   <section>
    <div>
        <img src={beela} alt={beela}/>
        <h1>Chrissy Klemencic</h1>
        <h1>{first_name}{last_name}</h1>
        <p>{age}</p>
        <p>{height}</p>
        <p>{position}</p>
        <p>{description}</p>
    </div>
   </section>
  )
}

export default PlayerCards