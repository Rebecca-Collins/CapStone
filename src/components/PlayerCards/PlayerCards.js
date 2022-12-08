// import { useState, useEffect } from "react"
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import "./PlayerCards.scss";
import axios from "axios";


function PlayerCards({post, loading}) {

  if (loading){
    return <h2>Loading....</h2>
  }
  return <ul className="list-group">
    {post.map(post => (
      <li key={post.id} className="list-group">
        {post.first_name}

      </li>
    ))}
  </ul>
// const [playerId, setPlayerId] = useState([]);

// useEffect(() => {
//   axios
//     .get('http://localhost:2020/players')
//     .then((response) => {
//       setPlayerId(response.data);
      
//     })
//     .catch((error) => {
//       console.log(error);
//     });
   
// }, []);

// useEffect(() => {
//   setPlayerId(id);
// }, [id]);



// const [players, setPlayers] = useState([]);

// useEffect(() => {
//   getAllPlayers(playerId)
// }, [playerId])
// -----THIS IS WHAT WAS WORKING BEFORE
//   return (

//     <section className="player-card">
      
// {playerId.map((player) => {
//   return(
//     <div key={player.id}>
//       <Link to={"/PlayerDetails"}>
//     <div className="player-card__container">
//       {/* <img className="player-card__image" src={player.img} alt={player.first_name}/> */}
//     {/* <p>{player.first_name} {player.last_name}</p> */}
//     </div>
//     </Link>
//     </div>
//   )
  
   
// })}
//     </section>
//   );
}

export default PlayerCards;
