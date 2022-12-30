import Input from "../../components/Input/Input";
import "./Sponsor.scss"
import closeIcon from "../../assets/icons/close.svg"
import { Link } from "react-router-dom";

function Sponsor({toggleTheme}) {

  return (
<main className="sponsor-form">
<button onClick={toggleTheme}>Toggle theme</button>
  <Link className="sponsor-form__close" to="/homepage">
  <img  src={closeIcon} alt="close icon"/>
  </Link>
  
    <form className="sponsor-form__content">
        <h1 className="sponsor-form__title">Sponsor The Team</h1>
        <Input type="text" name="name" label="Name"/>
        <Input type="text" name="email" label="Email"/>
        <lable>
          Description
        </lable>
        <input className="sponsor-form__description" type="text" name="textarea" label="Description"/>
        <button className="sponsor-form__button">Submit</button>
    </form>
    </main>
  )
}

export default Sponsor