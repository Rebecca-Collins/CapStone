import Input from "../../components/Input/Input";
import "./Sponsor.scss"
import light from "../../assets/icons/light.svg";
import dark from "../../assets/icons/dark.svg";
import HomeNav from "../../components/HomeNav/HomeNav";
// import { NavLink } from "react-router-dom";
function Sponsor({toggleTheme, theme}) {

  const handleClick = () => {
    window.open('https://fernandcedar.ca/');
  };


  return (
<section>
<div className="sponsor-toggle" onClick={toggleTheme}>
        {" "}
        {theme === "light" ? (
          <img className="toggle-sponsor-img" src={light} alt="dark icon" />
        ) : (
          <img className="toggle-sponsor-img" src={dark} alt="light icon" />
        )}
      </div>
<HomeNav/>
<main className="sponsor-form">  
<div className="sponsor-form__desktop-container">
<h1 className="sponsor-form__heading">Sponsor <span className="sponsor-form__span">Oceanside</span></h1>
<ul className="sponsor-form__list-container">
  <li className="sponsor-form__list">Please provide the following information:</li>
  <li className="sponsor-form__list">Company Name or Organization</li>
  <li className="sponsor-form__list">Contact Email Address</li>
  <li className="sponsor-form__list">A brief description of your company's mission and values, as well as any relevant experience or expertise</li>
</ul>
</div>
<div className="sponsor-form__current-sponsor">
<h3 className="sponsor-form__h3-heading">Current Sponsors</h3>
<li className="sponsor-form__link" onClick={handleClick}>Fern and Cedar</li>
</div>
 <form className={theme === "dark" ? "dark-sponsor" : "light-sponsor"}>
        <h1 className="sponsor-form__title">Sponsor Form</h1>
        <Input type="text" name="name" label="Name:"/>
        <Input type="text" name="email" label="Email:"/>
        <label for="description" className="sponsor-form__description-title">Description:</label>
        <textarea
          className="sponsor-form__description"
          id="description"
          type="text"
          name="description"
        />
       
        <button className="sponsor-form__button">Submit</button>
    </form>
    </main>
    </section>
  )
}

export default Sponsor