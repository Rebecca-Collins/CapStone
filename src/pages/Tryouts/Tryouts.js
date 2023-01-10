import "./Tryouts.scss";
import light from "../../assets/icons/light.svg";
import dark from "../../assets/icons/dark.svg";
import HomeNav from "../../components/HomeNav/HomeNav";

function Tryouts({ toggleTheme, theme }) {
  return (
    <div className="tryout-form">
      <HomeNav />
      {/* <button onClick={toggleTheme}>Toggle theme</button> */}
      <div className="tryouts-toggle" onClick={toggleTheme}>
        {" "}
        {theme === "light" ? (
          <img className="toggle-tryouts-img" src={light} alt="dark icon" />
        ) : (
          <img className="toggle-tryouts-img" src={dark} alt="light icon" />
        )}
      </div>

      <div className="tryout-form__background">
        <div className="tryout-form__title-container">
          <h1 className="tryout-form__title">TRYOUTS</h1>
          <p
            className={
              theme === "dark" ? "dark-tryouts-text" : "light-tryouts-text"
            }
          >
            Please complete the form below with your contact information and a
            brief description of your soccer experience.
          </p>
        </div>
        <div className={theme === "dark" ? "dark-tryouts" : "light-tryouts"}>
          <form className="tryout-form__container">
            <label className="tryout-form__name">
              Name:
              <input
                className="tryout-form__input"
                type="text"
                name="nameInput"
              />
            </label>
            <label className="tryout-form__name">
              Email:
              <input
                className="tryout-form__input"
                type="text"
                name="nameInput"
              />
            </label>
            
              <label className="tryout-form__name" >
              Details:
              <textarea
                className="tryout-form__textarea"
                id="comments"
                name="comments"
              ></textarea>
            </label>
            <button className="tryout-form__button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Tryouts;
