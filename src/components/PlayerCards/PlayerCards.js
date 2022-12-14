import { Link } from "react-router-dom";
import "./PlayerCards.scss";

function PlayerCards({ players }) {
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
  );
}

export default PlayerCards;
