// import logo from "../../assets/logo/logo1.jpeg";
import "./HomeNav.scss";
import { Link } from "react-router-dom";


function HomeNav() {

  return (
   
    <div className="home-nav">


<input type="checkbox" id="nav-control" className="nav-control" />
<label for="nav-control" className="home-nav__toggle">
  <div className="controller">
    <div className="slide"></div> <span>menu</span>
  </div>
</label>

<nav className="navigation">

  <h1><Link to=""></Link>Schedule</h1>
  <h1><Link to=""></Link>Stats</h1>
  <h1><Link to=""></Link>Try out</h1>
  <h1><Link to=""></Link>Donate</h1>
  <h1><Link to=""></Link>Sponsor</h1>
</nav>
    </div>

  );
}

export default HomeNav;
