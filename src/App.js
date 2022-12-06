import './App.scss';
import Main from "./pages/Main/Main"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import Dashboard from './pages/Dashboard/Dashboard';
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Main/>} />
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signUp" element={<SignUp/>}/>
    <Route path="/homePage" element={<HomePage/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
