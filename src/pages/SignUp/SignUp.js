import "../SignUp/SignUp.scss"
import Input from "../../components/Input/Input";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {

    const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
      event.preventDefault();

      const newUser = {
        email: event.target.email.value,
          first_name: event.target.first_name.value,
          last_name: event.target.last_name.value,
          password: event.target.password.value
      }

      axios
          .post("http://localhost:2020/users/signup", newUser)
          .then(() => {
              setSuccess(true);
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
            <form className="signup" onSubmit={handleSubmit}>
                <h1 className="signup__title">Sign up</h1>

                <Input className="signup__input" type="text" name="first_name" label="First name" />
                <Input type="text" name="last_name" label="Last name" />
                <Input type="text" name="email" label="Email" />
                <Input type="password" name="password" label="Password" />

                <button className="signup__button">Sign up</button>

                {success && <div className="signup__message">Signed up!</div>}
                {error && <div className="signup__message">{error}</div>}
            </form>
            <p>
                Have an account? <Link to="/login">Log in</Link>
            </p>
        </main>
  )
}
export default SignUp


