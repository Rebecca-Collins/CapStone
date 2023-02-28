import "./App.scss";
import useDarkMode from "./components/DarkMode/DarkMode"
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import HomePage from "./pages/HomePage/HomePage";
import PlayerDetails from "./pages/PlayerDetails/PlayerDetails";
import Schedule from "./pages/Schedule/Schedule";
import Tryouts from "./pages/Tryouts/Tryouts";
import Admin from "./pages/Admin/Admin";
import Sponsor from "./pages/Sponsor/Sponsor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {

  //---DARK MODE ----
  const [theme, toggleTheme] = useDarkMode();


  // ---GET ALL PLAYERS ----
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2020/players")
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/login"
          element={<Login theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/signUp"
          element={<SignUp theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/homePage"
          element={
            <HomePage
              players={players}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          }
        />
        <Route
          path="/players/:playerId"
          element={<PlayerDetails theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/schedule"
          element={<Schedule theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/tryouts"
          element={<Tryouts theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/admin"
          element={
            <Admin players={players} theme={theme} toggleTheme={toggleTheme} />
          }
        />
        <Route
          path="/sponsor"
          element={<Sponsor theme={theme} toggleTheme={toggleTheme} />}
        />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
