import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./Admin.scss";
import AddPlayer from "../../components/AddPlayer/AddPlayer";
import DeletePlayer from "../../components/DeletePlayer/DeletePlayer";
import { Link } from "react-router-dom";
import light from "../../assets/icons/light.svg";
import dark from "../../assets/icons/dark.svg";
import HomeNav from "../../components/HomeNav/HomeNav"


function Admin({ players, toggleTheme, theme }) {

  //  ---- ADMIN AUTH
  const [admin, setAdmin] = useState(false);
  const [failedAuth, setFailedAuth] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return setFailedAuth(true);
    }

    axios
      .get("http://oceanside-united.fly.dev/users/current", {
      // .get("http://localhost:8080/users/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setAdmin(response.data.admin);

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
          <Link className="admin__not-admin-link" to="/login">
            Login
          </Link>
        </div>
      )}
      {admin && (
        <div>
          <div className="admin-toggle" onClick={toggleTheme}>
        {" "}
        {theme === "light" ? (
          <img className="toggle-admin-img" src={light} alt="dark icon" />
        ) : (
          <img className="toggle-admin-img" src={dark} alt="light icon" />
        )}
      </div>
       
      <HomeNav/>
      <div className={theme === "dark" ? "dark-admin" : "light-admin"}>
          

          {/* <div className="admin__container"> */}
          <AddPlayer players={players} theme={theme} toggleTheme={toggleTheme}/>
          <DeletePlayer players={players} theme={theme} toggleTheme={toggleTheme}/>
          {/* </div> */}
        </div>
       
        </div>
      )}
    </div>
  
  );
}

export default Admin;
