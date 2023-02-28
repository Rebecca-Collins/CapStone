import "../Login/Login.scss";
import Input from "../../components/Input/Input";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import light from "../../assets/icons/light.svg";
import dark from "../../assets/icons/dark.svg";

function Login({ toggleTheme, theme }) {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://oceanside-united.fly.dev/users/login", {
      // .post("http://localhost:8080/users/login", {
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then((response) => {
        sessionStorage.setItem("token", response.data.token);
        navigate("/homePage");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  return (
    <main className="login-page">
      <div className="login-toggle" onClick={toggleTheme}>
        {" "}
        {theme === "light" ? (
          <img className="toggle-img" src={light} alt="dark icon" />
        ) : (
          <img className="toggle-img" src={dark} alt="light icon" />
        )}
      </div>
      <div
        className={
          theme === "dark" ? "dark-background-login" : "light-background-login"
        }
      >
        <form className="login" onSubmit={handleSubmit}>
          <h1 className="login__title">Log in</h1>
          <Input type="text" name="email" label="Email:" />
          <Input type="password" name="password" label="Password:" />
          <button className="login__button">Log in</button>
          {error && <div className="login__message">Failed to login</div>}
        </form>
      </div>
      <p className={theme === "dark" ? "dark-login__under-box-message" : "light-login__under-box-message"}>
        Need an account?{" "}
        <Link className={theme === "dark" ? "dark-login__link" : "light-login__link"} to="/signup">
          Sign up
        </Link>
      </p>
    </main>
  );
}

export default Login;
