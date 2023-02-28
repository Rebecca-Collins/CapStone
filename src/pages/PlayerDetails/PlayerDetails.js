import "./PlayerDetails.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import light from "../../assets/icons/light.svg";
import dark from "../../assets/icons/dark.svg";
import HomeNav from "../../components/HomeNav/HomeNav"

function PlayerDetails({ players, toggleTheme, theme }) {
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
      .get(`https://oceanside-united.fly.dev/players/${playerId}`)
      // .get(`http://localhost:8080/players/${playerId}`)
      .then((response) => {
        setSinglePlayer(response.data);
      })
      .catch((err) => {
        console.log("Player does not exists", err);
      });
  }, [players, playerId]);

  return (
    <section>
      
      <div className="player-details-toggle" onClick={toggleTheme}>
        {" "}
        {theme === "light" ? (
          <img className="toggle-player-details-img" src={light} alt="dark icon" />
        ) : (
          <img className="toggle-player-details-img" src={dark} alt="light icon" />
        )}
      </div>
      <HomeNav/>
      <div
        className={theme === "dark" ? "dark-player-details" : "light-player-details"}
      >
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
      </div>
    </section>
  );
}

export default PlayerDetails;
