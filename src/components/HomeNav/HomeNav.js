// import logo from "../../assets/logo/logo1.jpeg";
import "./HomeNav.scss";
import { Link } from "react-router-dom";
import { useState } from "react"

function HomeNav() {

    const [burger, setBurger] = useState("burger-bar unclicked");
    const [menu, setMenu] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

const updateMenu = () => {
    if(!isMenuClicked){
        setBurger("burger-bar clicked")
        setMenu("menu visible")
    } else{
        setBurger('burger-bar unclicked')
        setMenu("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
}

  return (
   
    <div>
        <nav>
            <div className="burger-menu" onClick={updateMenu}>
                <div className={burger}></div>
                <div className={burger}></div>
                <div className={burger}></div>
            </div>
        </nav>
        <div className={menu}>
        <Link>Schedule</Link>
         <Link>Stats</Link>
        <Link>Try Outs</Link>
         <Link>Donate</Link>
         <Link>Sponsor</Link>

        </div>
        {/* <div className="home-nav__container">
        <img className="home-nav__logo" src={logo} alt={logo} />
         </div> */}

    </div>

  );
}

export default HomeNav;
