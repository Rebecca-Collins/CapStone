// import MainNav from "../../components/Main-Nav/MainNav"
import { Link } from "react-router-dom";
import player from "../../assets/images/player2.png";
// import logo from "../../assets/logo/logo.png";
import LoginButton from "../../components/LoginButton/LoginButton";
// import MainLinks from "../../components/MainLinks/MainLinks"
import "./Main.scss";

function Main() {
  return (
    <div>
      <div className="main">
        <div className="main__container">
          <LoginButton />
          <h1 className="main__heading">OCEANSIDE UNITED</h1>
          <h2 className="main__title">
            Unleashing the power of female athletes
          </h2>
          <img className="main__img" src={player} alt={player} />
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
