import "./PlayerDetails.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import closeIcon from "../../assets/icons/close.svg"

function PlayerDetails({ players }) {
  const { playerId } = useParams();

  const [singlePlayer, setSinglePlayer] = useState({
    first_name: "",
    last_name: "",
    img: "",
    height: "",
    jersey: "",
    age: "",
    position: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:2020/players/${playerId}`)
      .then((response) => {
        setSinglePlayer(response.data);
      })
      .catch((err) => {
        console.log("Player does not exists", err);
      });
  }, [players, playerId]);

  return (
    <section className="single-player">
      <div>
        <Link className="single-player__home-link" to="/homepage">
          <img className="single-player__close-icon" src={closeIcon} alt={closeIcon}/> 
        </Link>
      </div>
      <h2 className="single-player__heading">
        {singlePlayer.first_name}
        <br></br>{" "}
        <span className="single-player__last-name">
          {singlePlayer.last_name}
        </span>
      </h2>
      <div className="single-player__image-container">
        <img
          className="single-player__image"
          src={singlePlayer.img}
          alt={singlePlayer.first_name}
        />
      </div>
      <div className="single-player__container">
        <div>
          <p className="single-player__content">
            <span className="single-player__last-name--color">Height: </span>{" "}
            {singlePlayer.height}
          </p>

          <p className="single-player__content">
            <span className="single-player__last-name--color">Jersey: </span>
            {singlePlayer.jersey}
          </p>
        </div>
        <div>
          <p className="single-player__content">
            <span className="single-player__last-name--color">Age: </span>
            {singlePlayer.age}
          </p>

          <p className="single-player__content">
            <span className="single-player__last-name--color">Position: </span>
            {singlePlayer.position}
          </p>
        </div>
      </div>

      <p className="single-player__description">{singlePlayer.description}</p>
    </section>
  );
}

export default PlayerDetails;
