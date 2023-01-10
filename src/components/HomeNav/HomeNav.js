import "./HomeNav.scss";
import { Link } from "react-router-dom";

function HomeNav({theme}) {
  return (
    <div className="home-nav">
      <input type="checkbox" id="nav-control" className="nav-control" />
      <label htmlFor="nav-control" className="home-nav__toggle">
        <div className="controller">
          {/* <div className="slide"></div> */}
          <div className="slide"></div>
        </div>
      </label>

      

      <nav className="navigation">
        <h1><Link className="navigation-link" to="/homepage">Home</Link></h1>
        <h1>
          <Link className="navigation-link" to="/schedule">
            Schedule
          </Link>
        </h1>
        <h1>
          <Link className="navigation-link" to="">
            Stats
          </Link>
        </h1>
        <h1>
          <Link className="navigation-link" to="/tryouts">
            Try out
          </Link>
        </h1>
        <h1>
          <Link className="navigation-link" to="">
            Donate
          </Link>
        </h1>
        <h1>
          <Link className="navigation-link" to="/sponsor">
            Sponsor
          </Link>
        </h1>
        <h1>
          <Link className="navigation-link" to="/admin">
            Admin
          </Link>
        </h1>
      </nav>
    </div>
  );
}

export default HomeNav;
