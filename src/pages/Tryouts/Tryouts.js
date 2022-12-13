import "./Tryouts.scss";

function Tryouts() {
  return (
    <div className="tryout-form">
    <div className="tryout-form__background">
        <form className="tryout-form__container">
          <label className="tryout-form__name">
            Name
            <input type="text" name="nameInput" />
          </label>
          <label className="tryout-form__name">
            Email
            <input type="text" name="nameInput" />
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
