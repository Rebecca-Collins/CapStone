import "./FlipCard.scss";
import beela from "../../assets/images/beela.jpeg";

function FlipCard() {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__face card__face--front">
          <h2>Hello</h2>
        </div>
        <div className="card__face card__face--back">
            <div className="card__content">
                <div className="card__header">
                     <img className="card__img" src={beela} alt={beela}/>
                    <h3>title</h3>
                </div>
                <div className="card__body">
               <h3>details</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Rerum, iusto corporis. Dolores animi, laboriosam distinct</p>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
