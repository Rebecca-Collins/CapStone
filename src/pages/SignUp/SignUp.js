import "../SignUp/SignUp.scss";
import Input from "../../components/Input/Input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import light from "../../assets/icons/light.svg";
import dark from "../../assets/icons/dark.svg";

function SignUp({ toggleTheme, theme }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      email: event.target.email.value,
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      password: event.target.password.value,
    };

    axios
      .post("https://oceanside-united.fly.dev/users/signup", newUser)
      // .post("http://localhost:8080/users/signup", newUser)
      .then(() => {
        setSuccess(true);
        navigate("/login");
        setError("");
        event.target.reset();
      })
      .catch((error) => {
        setSuccess(false);
        setError(error.response.data);
      });
  };

  return (
    <main className="signup-page">
      <div className="signup-toggle" onClick={toggleTheme}>
        {" "}
        {theme === "light" ? (
          <img className="toggle-signup-img" src={light} alt="dark icon" />
        ) : (
          <img className="toggle-signup-img" src={dark} alt="light icon" />
        )}
      </div>
      {/* <button onClick={toggleTheme}>Toggle theme</button> */}
      <div
        className={theme === "dark" ? "dark-box-shadow" : "light-box-shadow"}
      >
        <form className="signup" onSubmit={handleSubmit}>
          <h1 className="signup__title">Sign up</h1>

          <Input
            className="signup__input"
            type="text"
            name="first_name"
            label="First Name:"
          />
          <Input type="text" name="last_name" label="Last Name:" />
          <Input type="text" name="email" label="Email:" />
          <Input type="password" name="password" label="Password:" />

          <button className="signup__button">Sign up</button>

          {success && <div className="signup__message">Signed up!</div>}
          {error && <div className="signup__message">{error}</div>}
        </form>
      </div>
      <p className={theme === "dark" ? "dark-signup__box-message" : "light-signup__box-message"} >
        Have an account? <Link className={theme === "dark" ? "dark-signup__link" : "light-signup__link"} to="/login">Log in</Link>
      </p>
    </main>
  );
}
export default SignUp;
