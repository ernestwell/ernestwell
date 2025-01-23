import React, { useState } from "react";
import "./sign.css";
import logImage from "./images/log.svg";
import registerImage from "./images/register.svg";
import '@fortawesome/fontawesome-free/css/all.min.css';


const SignInSignUp = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  return (
    <div className={`container-sign ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container-s">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title-s">Sign in</h2>
            <div className="input-field-s">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field-s">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn-s solid" />
            <p className="social-text-s">Or Sign in with social platforms</p>
            <div className="social-media-s">
              <a href="#" className="social-icon-s">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon-s">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon-s">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon-s">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title-s">Sign up</h2>
            <div className="input-field-s">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field-s">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field-s">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn-s" value="Sign up" />
            <p className="social-text-s">Or Sign up with social platforms</p>
            <div className="social-media-s">
              <a href="#" className="social-icon-s">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon-s">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon-s">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon-s">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content-s">
            <h3>New here?</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button
              className="btn-s transparent"
              id="sign-up-btn"
              onClick={() => setIsSignUpMode(true)}
            >
              Sign up
            </button>
          </div>
          {/* <img src={logImage} className="image" alt="" /> */}
        </div>
        <div className="panel right-panel">
          <div className="content-s">
            <h3>One of us?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button
              className="btn-s transparent"
              id="sign-in-btn"
              onClick={() => setIsSignUpMode(false)}
            >
              Sign in
            </button>
          </div>
          {/* <img src={registerImage} className="image" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;

