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

  <Link className="navigation-link" to="">Schedule</Link>
  <Link className="navigation-link" to="">Stats</Link>
  <Link className="navigation-link" to="">Try out</Link>
  <Link className="navigation-link" to="">Donate</Link>
  <Link className="navigation-link" to="">Sponsor</Link>
  
</nav>
    </div>

  );
}

export default HomeNav;
