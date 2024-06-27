import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const SignUp = ({ handleSign }) => {
  return (
    <div className="signup_form">
      <div>
        <h1>Welcome to Pinterset</h1>
        <p>Find new ideas to try</p>
      </div>
      <form action="">
        <label htmlFor="">
          Email :
          <input type="email" placeholder="Email" />
        </label>
        <label htmlFor="">
          Password :
          <input type="password" placeholder="Create a Password" />
        </label>
        <label htmlFor="">
          Birthdate :
          <input type="date" />
        </label>
        <button> Continue</button>
      </form>
      <div className="other">
        <div className="terms">
          <p>By continuing, you agree to Pinterest's</p>
          <p>
            {" "}
            <span>Terms of Services</span> and acknowledge
          </p>
          <p>
            you've read our <span> Privacy Policy </span>{" "}
          </p>
        </div>
        <p>
          Already a member? <span onClick={handleSign}>Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
