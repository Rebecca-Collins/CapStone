import "./Tryouts.scss";

function Tryouts() {
  return (
    <div className="tryout-form">
      <div className="tryout-form__background">
        <div className="tryout-form__title-container">
          <h1 className="tryout-form__title">
            <span className="tryout-form__span-title">TRYOUTS</span> FORM
          </h1>
          <p className="tryout-form__text">
            Please complete the form below with your contact information and a
            brief description of your soccer experience.
          </p>
        </div>
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
          <label>
            <label className="tryout-form__name" />
            Add a Comment
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
  );
}

export default Tryouts;
