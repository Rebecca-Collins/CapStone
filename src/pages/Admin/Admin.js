
import axios from "axios";
import React, { useState } from "react";
import { useEffect} from "react";
import Delete from "../Delete/Delete";
import { Link } from "react-router-dom"
import "./Admin.scss";

import deleteicon from "../../assets/icons/delete.svg"



function Admin({ players }) {

  const [clickDelete, setClickDelete] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
 const [playerToDelete, setPlayerToDelete] = useState("");

  const handleDelete = (event) => {
    axios
      .delete('http://localhost:2020/players/' + players.id )
      .then((response) => {
        console.log("check for this:", response)
        setSuccess("The player was deleted successfully!");
        axios.get("http://localhost:2020/inventories").then((response) => {
          setPlayerToDelete(response.data);
         
        });
      })
      .catch((error) => {
        console.log(error);
        setError("Something Went Wrong! Please Try Again.");
      });
  };

  const handleClick = (playerToDelete) => {
    setClickDelete(true);
    
    setPlayerToDelete(playerToDelete);
};
  
  
 
  // --- Delete Player  the code below had some functionality--- 
// const [clickDelete, setClickDelete] = useState(false);
// const [playerToDelete, setPlayerToDelete] = useState("");

// const handleClick = (players) => {
//   setClickDelete(true);
//   setPlayerToDelete(players.id)

// };




  //  ---- ADMIN AUTH
  const [admin, setAdmin] = useState(false);
  const [failedAuth, setFailedAuth] = useState(false);

  const handleLogin = (event) => {
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email === "admin" && password === "password") {
      setAdmin(true);
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return setFailedAuth(true);
    }
    setAdmin(admin);

    axios
      .get("http://localhost:2020/users/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setAdmin(response.data.admin);
        // If the user is an admin, the response will contain the "isAdmin" property set to true
        if (response.data.admin) {
          
        } else {
          console.log("User is not an admin");
        }
      })
      .catch((error) => {
        console.log(error);
        setFailedAuth(true);
      });
  }, [admin, failedAuth]);


  return (
    <div>
      {failedAuth && (
        <div>
          There was an error authenticating your session. Please try logging in
          again.
        </div>
      )}
      {!admin && (
        <div>
          You are not an admin. Please login with an admin account to continue.
        </div>
      )}
      {admin && (
        <div>
          <div className="admin__welcome">Welcome Admin! You are now logged in.</div>
          {/* Other components or messages for the admin here */}
        </div>
      )}
      {!admin && !failedAuth && (
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input type="text" name="email" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )}

      <div>
      {clickDelete === true ? (
                <Delete
                success={success}
                error={error}
                    playerToDelete={playerToDelete}
                    handleDelete={handleDelete}
                    
                />
            ) : null}
            
      </div>

     {players.map((player) => (
      
      
         <div className="admin-players" key={player.id}>

             <div className="admin-players__container">
          
           <p className="player-card__info">
             {player.first_name}
             <span className="player-card__color"> {player.last_name}</span>
            </p>
       
  <Link to={"/delete/players/" + player.id}>
    <div onClick={() => {
      handleClick(players.id)
      console.log(players.id)
    }}>
  <img  className="admin-player__icon" src={deleteicon} alt={deleteicon}/>
  </div>
  </Link>
   
 
           </div>
      </div>
         
       ))}
       </div>
  
     
        
      
  )
     }  
{/* 
<div>
      {clickDelete === true ? (
        <Delete
          playerToDelete={playerToDelete}
          handleDelete={handleDelete}
          success={success}
          error={error}
          playersData={players}
        />
      ) : null}

      {players.map((player) => (
        <Link key={player.id} to={"/delete/" + player.id}>
          <div
            onClick={() => {
              handleClick(player.id);
            }}
          >
            <img
              className="admin-player__icon"
              src={deleteicon}
              alt={deleteicon}
            />
          </div>
        </Link>
      ))}
    </div> */}
 
export default Admin;




 

   