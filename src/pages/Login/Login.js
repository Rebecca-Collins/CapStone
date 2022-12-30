import "../Login/Login.scss";
import Input from "../../components/Input/Input";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({toggleTheme}) {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:2020/users/login", {
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
      <button onClick={toggleTheme}>Toggle theme</button>
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="login__title">Log in</h1>
        <Input type="text" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
        <button className="login__button">Log in</button>
        {error && <div className="login__message">Failed to login</div>}
      </form>
      <p>
        Need an account?{" "}
        <Link className="login__link" to="/signup">
          Sign up
        </Link>
      </p>
    </main>
  );
}

export default Login;
