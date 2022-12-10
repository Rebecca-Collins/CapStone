// import logo from "../../assets/logo/logo1.jpeg";
import "../Main-Nav/MainNav.scss"
import { Link } from "react-router-dom"

function MainNav() {
  return (
    <div className="main-nav">
      <Link className="main-nav__link" to="/login">Login</Link>
      {/* <div className="main-nav__logo-container"> */}
      {/* <img className="logo" src={logo} alt={logo} /> */}
      {/* </div> */}
      <div className="main-nav__links">
        
        <Link className="main-nav__link" to="/signUp">Sign Up</Link>
        </div>
    </div>
  )
}

export default MainNav