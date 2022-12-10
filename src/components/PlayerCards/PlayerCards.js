
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
import "./PlayerCards.scss";
import PlayerDetails from "../../pages/PlayerDetails/PlayerDetails";



function PlayerCards() {

  const [players, setPlayers] = useState([]);


  useEffect(() => {
    axios
      .get('http://localhost:2020/players')
      .then((response) => {
        setPlayers(response.data);
       
      })
      .catch((error) => {
        console.log(error);
      });
    
 }, []);


  return (
    <div>
  <div className="player-card">
    {players.map(player => (
      <div key={player.id} className="player-card__container">
        <Link to={'/players/' + player.id}>
        <img className="player-card__image" src={player.img} alt={player.first_name}/>
        </Link>
         <p className="player-card__info">{player.first_name} { player.last_name}</p> 
        </div> 
    
    ))}
     <PlayerDetails players={players}/> 
     </div> 
  </div>

  )

}


export default PlayerCards