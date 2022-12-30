import { Link } from "react-router-dom";
import player from "../../assets/images/colorWomen.jpg";
import LoginButton from "../../components/LoginButton/LoginButton";


import "./Main.scss";

function Main() {
  return (
    <div className="background">
      {/* <img 
        className="main__image-icon"
        src={player}
        alt={"A player on the team"}
      /> */}
      <div className="main">
        <div className="main__container">
          <Link to="/signup" className="main__signup-btn">
            Signup
          </Link>
          <LoginButton/>
          <h1 className="main__heading">OCEANSIDE <span className="main__span-heading">UNITED</span></h1>
          <h2 className="main__title">
            Unleashing the <span className="main__span"> power </span>  of female
            athletes
          </h2>
          <div className="main__link-container">
           <Link to="/signup" className="main__link">
                join team
              </Link> 
              </div>
              <div className="main__link-sponsor">
            <Link to="/signup" className="main__link">
                sponsor
              </Link>
            
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Main;