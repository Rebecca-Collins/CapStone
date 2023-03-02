import deleteicon from "../../assets/icons/delete.svg";
import deletePlayer from "../../assets/icons/person_remove.svg";
import "./DeletePlayer.scss";
import axios from "axios";
import React, { useState } from "react";

function DeletePlayer({ players, theme }) {
  const [deleteVisible, setDeleteVisible] = useState(false);

  const toggleDelete = () => {
    setDeleteVisible(!deleteVisible);
  };

  //  --- DELETE PLAYER ----
  const [deletedPlayers, setDeletedPlayers] = useState([]);
  const handleDelete = (player) => {
    axios
      .delete("http://oceanside-united.herokuapp.com/players/" + player.id)
      // .delete("http://localhost:8080/players/" + player.id)
      .then((response) => {
        const updatedDeletedPlayers = [...deletedPlayers, player.id];
        setDeletedPlayers(updatedDeletedPlayers);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button className="delete-player" onClick={toggleDelete}>
        Delete Player
        <img
          className="delete-player__player-icon"
          src={deletePlayer}
          alt="delete player icon"
        />
      </button>

      {deleteVisible && (
        <div>
          {players
            .filter((player) => !deletedPlayers.includes(player.id))
            .map((player) => (
              <div
                className={theme === "dark" ? "dark-delete" : "light-delete"}
                key={player.id}
              >
                <p className="delete-player__info">
                  {player.first_name}
                  <span className="delete-player__color">
                    {player.last_name}
                  </span>
                </p>

                <div
                  className="delete-player__delete-container"
                  onClick={() => {
                    handleDelete(player);
                    console.log(player);
                  }}
                >
                  <img
                    className="delete-player__icon"
                    src={deleteicon}
                    alt={deleteicon}
                  />
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default DeletePlayer;
