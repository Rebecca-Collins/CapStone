import deleteicon from "../../assets/icons/delete.svg";
import deletePlayer from "../../assets/icons/person_remove.svg"
import "./DeletePlayer.scss"
import axios from "axios";
import React, { useState } from "react";

function DeletePlayer({players}) {


    const [deleteVisible, setDeleteVisible] = useState(false);

    // Function to toggle the value of deleteVisible when the button is clicked
    const toggleDelete = () => {
      setDeleteVisible(!deleteVisible);
    }
  
    //  --- DELETE PLAYER ----
    const [deletedPlayers, setDeletedPlayers] = useState([]);
    const handleDelete = (player) => {
      axios
        .delete("http://localhost:2020/players/" + player.id)
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
        <button className="delete-player" onClick={toggleDelete}>Delete Player<img className="delete-player__player-icon" src={deletePlayer} alt="delete player icon"/></button>
        {deleteVisible &&
        <div>
            {players
              .filter((player) => !deletedPlayers.includes(player.id))
              .map((player) => (
                <div className="admin__players" key={player.id}>
                    
                  <p className="admin__info">
                    {player.first_name}
                    <span className="admin__color">{player.last_name}</span>
                  </p>

                  <div
                    className="admin__delete-container"
                    onClick={() => {
                      handleDelete(player);
                      console.log(player);
                    }}
                  >
                    <p className="admin__delete-text">Delete</p>
                    <img
                      className="admin__icon"
                      src={deleteicon}
                      alt={deleteicon}
                    />
                  </div>
                </div>
                
              ))}
              </div>
              }
    </div>
  )
}

export default DeletePlayer