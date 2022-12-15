import { Link } from "react-router-dom";
import player from "../../assets/images/player.png";
import LoginButton from "../../components/LoginButton/LoginButton";

import "./Main.scss";

function Main() {
  return (
    <div className="main__background">
      <img
        className="main__image-icon"
        src={player}
        alt={"A player on the team"}
      />
      <div className="main">
        <div className="main__container">
          <Link to="/signup" className="main__signup-btn">
            Signup
          </Link>
          <LoginButton />
          <h1 className="main__heading">OCEANSIDE UNITED</h1>
          <h2 className="main__title">
            Unleashing the <span className="main__span">power</span> of female
            athletes
          </h2>
          <div className="main__link-container">
            <div className="main-links-container">
              <Link to="/signup" className="main__link">
                join the team!
              </Link>
            </div>

            <div className="main__container-sponsor">
              <Link to="/signup" className="main__link">
                sponsor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
