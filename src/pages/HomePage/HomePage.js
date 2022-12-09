import "./HomePage.scss";
import HomeNav from "../../components/HomeNav/HomeNav";
import PlayerCards from "../../components/PlayerCards/PlayerCards";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {

  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);

  useEffect(() => {
      const token = sessionStorage.getItem('token');

      if (!token) {
          return setFailedAuth(true);
      }

      // Get the data from the API
      axios.get('http://localhost:2020/users/current', {
          headers: {
              Authorization: `Bearer ${token}`
          }
      })
          .then((response) => {
              setUser(response.data);
          })
          .catch((error) => {
              console.log(error);
              setFailedAuth(true);
          });
  }, []);

  const handleLogout = () => {
      sessionStorage.removeItem('token');
      setUser(null);
      setFailedAuth(true);
  };

  if (failedAuth) {
      return (
          <main className="dashboard">
              <p>You must be logged in to see this page.</p>
              <p><Link to="/login">Log in</Link></p>
          </main>
      );
  }

  if (user === null) {
      return (
          <main className="dashboard">
              <p>Loading...</p>
          </main>
      );
  }
  return (
    <section> 
        <HomeNav/>
        <button className="dashboard__logout" onClick={handleLogout}>
                Log out
            </button>
   <div className="home">
        <div>
        <div className="home__hero-container"></div>
        </div>
    </div>
    <PlayerCards/>
    </section>
  )
}

export default HomePage