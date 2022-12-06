import MainNav from "../../components/Main-Nav/MainNav"
import player from "../../assets/images/player2.png"
import next from "../../assets/icons/next.svg"
import "./Main.scss"

function Main() {
  return (
    <div>
        <MainNav/>
        <div className="main">
        <h1 className="main__heading">OCEANSIDE UNITED</h1>
        <img className="main__img" src={player} alt={player}/>
        <button className="main__button">SPONSOR NOW!</button>
        <h3 className="main__view-team-text">View Team</h3>
        <img className="main__next-icon" src={next} alt={next}/>
        <div className="main__view-team"></div>
        </div>
       
    </div>
  )
}

export default Main