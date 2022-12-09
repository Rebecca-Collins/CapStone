import './App.scss';
import Main from "./pages/Main/Main"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import HomePage from "./pages/HomePage/HomePage";
import PlayerDetails from './pages/PlayerDetails/PlayerDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from "./pages/Schedule/Schedule"



function App() {





  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signUp" element={<SignUp/>}/>
    <Route path="/homePage" element={<HomePage/>}/>
    <Route path="/players/:playerId" element={<PlayerDetails/>}/>
    <Route path="/schedule" element={<Schedule/>}/>
   
   </Routes>
   </BrowserRouter>
  );
}

export default App;
