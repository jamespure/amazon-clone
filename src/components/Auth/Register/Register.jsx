import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addUser } from "../../../redux/actions/userActions";

const Register = ({addUser}) => {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(email, password, displayName);

    
    setEmail('')
    setPassword('')
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form__control">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form__control">
            <label>First Name</label>
            <input
              type="text"
              name="confirmEmail"
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          <div className="form__control">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form__control">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login__signInButton">
            Sign Up
          </button>
        </form>
        <p>
          By signing-un you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <Link to="/login">
          <button className="login__registerButton">Login here</button>
        </Link>
      </div>
    </div>
  );
};

const mapPropsToState = (state) => ({
  user: state.user.items,
});

export default connect(mapPropsToState, { addUser })(Register);
