import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import {loginUser} from "../../../redux/actions/userActions"
import { connect } from 'react-redux';

const Login = ({user, loginUser}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password)

    setEmail('')
    setPassword('')
  }

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
        <h1>Sign-in</h1>
        <form onSubmit={handleSubmit}>
          <div className="form__control">
            <label>Email</label>
            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="form__control">
            <label>Password</label>
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <Link to="/register">
          <button className="login__registerButton">
            Create your Amazon Account
          </button>
        </Link>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user.items
})
export default connect(mapStateToProps, { loginUser})(Login);
