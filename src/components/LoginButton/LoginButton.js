import "./LoginButton.scss";
import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <div>
    <Link className="login__main-button" to="/login">Login</Link>
    </div>
  )
}

export default LoginButton