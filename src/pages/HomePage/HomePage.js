import "./HomePage.scss";
import HomeNav from "../../components/HomeNav/HomeNav";
import PlayerCards from "../../components/PlayerCards/PlayerCards";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommentSection from "../../components/CommentSection/CommentSection";
import CommentList from "../../components/CommentList/CommentList";
import light from "../../assets/icons/light.svg";
import dark from "../../assets/icons/dark.svg";

function HomePage({ players, toggleTheme, theme }) {
  const [user, setUser] = useState([]);
  const [failedAuth, setFailedAuth] = useState(false);
  const [comments, setComments] = useState([]);

  //  --- GET ALL COMMENTS ----
  const fetchComments = async () => {
    const response = await axios.get("https://oceanside-united.herokuapp.com/comments");
    // const response = await axios.get("http://localhost:8080/comments");
    setComments(response.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  //  ---- ADMIN AUTH ----
  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return setFailedAuth(true);
    }

    axios
      .get("https://oceanside-united.herokuapp.com/users/current", {
      // .get("http://localhost:8080/users/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
    sessionStorage.removeItem("token");
    setUser(null);
    setFailedAuth(true);
  };

  if (failedAuth) {
    return (
      <main className="dashboard">
        <p>You must be logged in to see this page.</p>
        <p>
          <Link to="/login">Log in</Link>
        </p>
      </main>
    );
  }

  if (user === !user) {
    return (
      <main className="dashboard">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <section>
      <div className="homepage-toggle" onClick={toggleTheme}>
        {" "}
        {theme === "light" ? (
          <img className="toggle-homepage-img" src={light} alt="dark icon" />
        ) : (
          <img className="toggle-homepage-img" src={dark} alt="light icon" />
        )}
      </div>
      <div className={theme === "dark" ? "dark-text" : "light-text"}>
        <HomeNav theme={theme} />
        <Link to="/" className="dashboard__logout" onClick={handleLogout}>
          Log out
        </Link>
        <div>
          <h1 className="home">
            Oceanside <span className="home__span-home">United</span>
          </h1>
        </div>
        <PlayerCards players={players} />
        <CommentSection theme={theme} fetchComments={fetchComments} />
        <CommentList comments={comments} fetchComments={fetchComments} />
      </div>
    </section>
  );
}

export default HomePage;
