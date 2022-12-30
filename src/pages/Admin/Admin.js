import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./Admin.scss";
import AddPlayer from "../../components/AddPlayer/AddPlayer";
import DeletePlayer from "../../components/DeletePlayer/DeletePlayer";
import { Link } from "react-router-dom";


function Admin({ players, toggleTheme }) {

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
                <button onClick={toggleTheme}>Toggle theme</button>
          <div className="admin__welcome">
            Welcome, <span className="admin__admin-color">Admin!</span> You are
            now logged in!
          </div>

          <div className="admin__container">
          <AddPlayer players={players} />
          <DeletePlayer players={players}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
