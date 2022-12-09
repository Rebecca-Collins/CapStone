import "./PlayerDetails.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PlayerDetails() {
  const [singlePlayer, setSinglePlayer] = useState([]);
  const { playerId } = useParams();

  useEffect(() => {
  
    axios
      .get(`http://localhost:2020/players/${playerId}`)
      .then((response) => {
        setSinglePlayer(response.data);
      })
      .catch((err) => {
        console.log("Player does not exsits", err);
      });
  }, [playerId]);

  return (
    <section className="single-player">
      <h2 className="single-player__heading">
        {" "}
        {singlePlayer.first_name} {singlePlayer.last_name}
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
          <p className="single-player__content">Height: </p>
          <p className="single-player__content">{singlePlayer.height}</p>
        </div>

        <div>
          <p className="single-player__content">Jersey:</p>
          <p className="single-player__content">{singlePlayer.jersey}</p>
        </div>
        <div>
          <p className="single-player__content">Age:</p>
          <p className="single-player__content"> {singlePlayer.age}</p>
        </div>
        <div>
          <p className="single-player__content">Position:</p>
          <p className="single-player__content">{singlePlayer.position}</p>
        </div>
      </div>
      <p className="single-player__content">About:</p>
      <p className="single-player__content">{singlePlayer.description}</p>
    </section>
  );
}

export default PlayerDetails;
