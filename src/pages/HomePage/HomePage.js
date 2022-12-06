import "./HomePage.scss"
import HomeNav from "../../components/HomeNav/HomeNav"
import PlayerCards from "../../components/PlayerCards/PlayerCards"

function HomePage() {
  return (
    <section> 
        <HomeNav/>
   <div className="home">
        <div>
        <div className="home__hero-container"></div>
        </div>
    </div>
    <PlayerCards/>
    </section>
  )
}

export default HomePage