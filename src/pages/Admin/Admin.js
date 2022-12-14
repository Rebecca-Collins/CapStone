import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./Admin.scss";
import deleteicon from "../../assets/icons/delete.svg";

function Admin({ players }) {
  //  --- DELETE PLAYER -----
  const [deletedPlayers, setDeletedPlayers] = useState([]);
  const handleDelete = (player) => {
    axios
      .delete("http://localhost:2020/players/" + player.id)
      .then((response) => {
        console.log("check for this:", response);
        const updatedDeletedPlayers = [...deletedPlayers, player.id];
        setDeletedPlayers(updatedDeletedPlayers);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //  ---- ADMIN AUTH
  const [admin, setAdmin] = useState(false);
  const [failedAuth, setFailedAuth] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return setFailedAuth(true);
    }

    axios
      .get("http://localhost:2020/users/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setAdmin(response.data.admin);

        console.log(response.data);
        if (!response.data.admin) {
          console.log("User is not an admin");
        }
      })
      .catch((error) => {
        console.log(error);
        setFailedAuth(true);
      });
  }, []);

  return (
    <div className="admin">
      {failedAuth && (
        <div className="admin__text-message">
          There was an error authenticating your session. Please try logging in
          again.
        </div>
      )}
      {!admin && (
        <div className="admin__not-admin">
          You are not an admin. Please login with an admin account to continue.
        </div>
      )}
      {admin && (
        <div>
          <div className="admin__welcome">
            Welcome, <span className="admin__color">Admin!</span> You are now logged in! 
          </div>
          <div className="admin__container">
          {players
            .filter((player) => !deletedPlayers.includes(player.id))
            .map((player) => (
              
              <div className="admin__players" key={player.id}>

                  <p className="admin__info">
                    {player.first_name}
                    <span className="admin__color">
                      {player.last_name}
                    </span>
                  </p>

                  <div className="admin__delete-container"
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
        </div>
      )}  
    </div>
  );
}

export default Admin;
