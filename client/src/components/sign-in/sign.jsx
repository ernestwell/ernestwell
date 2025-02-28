import React, { useState, useEffect } from "react";
import "./sign.css";
import logImage from "./images/log.svg";
import registerImage from "./images/register.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  loginWithEmailPassword,
  signupWithEmailPassword,
  loginWithFacebook,
  loginWithGithub,
  loginWithGoogle,
} from "../../Firebase";
import { useNavigate } from "react-router-dom";

const SignInSignUp = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const footer = document.querySelector(".footer");
    if (footer) footer.style.display = "none";
    return () => {
      if (footer) footer.style.display = "block";
    };
  }, []);

  // Handle Login Form Submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const res = await loginWithEmailPassword(email, password);
    if (res) {
      toast.success("Login successful!", { autoClose: 2000 });
      setTimeout(() => navigate("/"), 2000);
    } else {
      toast.error("Invalid credentials!");
    }
  };

  // Handle Signup Form Submission
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const res = await signupWithEmailPassword(signUpEmail, signUpPassword);
    if (res) {
      toast.success("Account created successfully!", { autoClose: 2000 });
      setTimeout(() => navigate("/"), 2000);
    } else {
      toast.error("Signup failed. Try again.");
    }
  };

  // Handle Social Logins
  const handleSocialLogin = async (loginFunction) => {
    const res = await loginFunction();
    if (res) {
      toast.success("Login successful!", { autoClose: 2000 });
      setTimeout(() => navigate("/"), 2000);
    } else {
      toast.error("Login failed. Try again.");
    }
  };

  return (
    <div className={`container-sign ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container-s">
        <div className="signin-signup">
          {/* Sign In Form */}
          <form className="sign-in-form" onSubmit={handleLoginSubmit}>
            <h2 className="title-s">Sign in</h2>
            <div className="input-field-s">
              <i className="fas fa-user"></i>
              <input
                type="email"
                placeholder="User Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field-s">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Login" className="btn-s solid" />
            <p className="social-text-s">Or Sign in with social platforms</p>
            <div className="social-media-s">
              <button className="social-icon-s" onClick={() => handleSocialLogin(loginWithGoogle)}>
                <i className="fab fa-google"></i>
              </button>
              <button className="social-icon-s" onClick={() => handleSocialLogin(loginWithFacebook)}>
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="social-icon-s" onClick={() => handleSocialLogin(loginWithGithub)}>
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>

          {/* Sign Up Form */}
          <form className="sign-up-form" onSubmit={handleSignUpSubmit}>
            <h2 className="title-s">Sign up</h2>
            <div className="input-field-s">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                required
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
              />
            </div>
            <div className="input-field-s">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                required
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
              />
            </div>
            <input type="submit" className="btn-s" value="Sign up" />
            <p className="social-text-s">Or Sign up with social platforms</p>
            <div className="social-media-s">
              <button className="social-icon-s" onClick={() => handleSocialLogin(loginWithGoogle)}>
                <i className="fab fa-google"></i>
              </button>
              <button className="social-icon-s" onClick={() => handleSocialLogin(loginWithFacebook)}>
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="social-icon-s" onClick={() => handleSocialLogin(loginWithGithub)}>
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Panels */}
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content-s">
            <h3>New here?</h3>
            <p>Create an account and get started!</p>
            <button className="btn-s transparent" onClick={() => setIsSignUpMode(true)}>
              Sign up
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content-s">
            <h3>One of us?</h3>
            <p>Welcome back! Sign in to continue.</p>
            <button className="btn-s transparent" onClick={() => setIsSignUpMode(false)}>
              Sign in
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignInSignUp;