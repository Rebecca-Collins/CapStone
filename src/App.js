import './App.scss';
import Main from "./pages/Main/Main"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import HomePage from "./pages/HomePage/HomePage";
import PlayerDetails from './pages/PlayerDetails/PlayerDetails';
import Schedule from "./pages/Schedule/Schedule";
import Tryouts from "./pages/Tryouts/Tryouts";
import Admin from "./pages/Admin/Admin";
// import Delete from "./pages/Delete/Delete";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';






function App() {

// ---GET ALL PLAYERS ---- 
const [players, setPlayers] = useState([]);
useEffect(() => {
  axios
    .get("http://localhost:2020/players")
    .then((response) => {
      setPlayers(response.data);
      console.log("HELP", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);



  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signUp" element={<SignUp/>}/>
    <Route path="/homePage" element={<HomePage players={players}/>}/>
    <Route path="/players/:playerId" element={<PlayerDetails/>}/>
    <Route path="/schedule" element={<Schedule/>}/>
    <Route path="/tryouts" element={<Tryouts/>}/>
    <Route path="/admin" element={<Admin players={players}/>}/> 
    {/* <Route path="/delete/:playerId" element={<Delete/>}/> */}
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
