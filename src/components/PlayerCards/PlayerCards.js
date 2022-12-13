import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
import "./PlayerCards.scss";
// import DeletePlayer from "../DeletePlayer/DeletePlayer";

function PlayerCards({players}) {
  // const [players, setPlayers] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:2020/players")
  //     .then((response) => {
  //       setPlayers(response.data);
  //       console.log("HELP", response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

 

  return (
    <div className="player-card">
      <div className="player-card__file">
        {players.map((player) => (
          <div key={player.id}>
            <Link
              className="player-card__container"
              to={"/players/" + player.id}
            >
              <img
                className="player-card__image"
                src={player.img}
                alt={player.first_name}
              />
            </Link>
            <p className="player-card__info">
              {player.first_name} {"  "}{" "}
              <span className="player-card__color"> {player.last_name}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
    //   <div>
    // <div className="player-card">
    //   {players.map(player => (
    //     <div key={player.id} className="player-card__container">
    //       <Link to={'/players/' + player.id}>
    //       <img className="player-card__image" src={player.img} alt={player.first_name}/>
    //       </Link>
    //        <p className="player-card__info">{player.first_name} { player.last_name}</p>
    //       </div>
    //   ))}
    //   <PlayerDetails playerId={player.id}/>

    //    </div>
    // </div>
  );
}

export default PlayerCards;
