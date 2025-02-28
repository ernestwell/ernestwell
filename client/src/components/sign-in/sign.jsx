import React, { useState, useEffect } from "react";
import "./sign.css";
import logImage from "./images/log.svg";
import registerImage from "./images/register.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  loginWithEmailPassword,
  loginWithFacebook,
  loginWithGithub,
  loginWithGoogle,
} from "../../Firebase";
import { useNavigate } from "react-router-dom";

const SignInSignUp = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const footer = document.querySelector(".footer");
    if (footer) {
      footer.style.display = "none";
      setHideFooter(true);
    }

    return () => {
      if (footer) footer.style.display = "block";
    };
  }, []);
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await loginWithEmailPassword(email, password);
  };
  const handleLoginWithGoogle = async () => {
    const res = await loginWithGoogle();
    if (res) {
      toast.success("Login successful!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => navigate("/"), 2000);
    }
  };

  return (
    <div className={`container-sign ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container-s">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title-s">Sign in</h2>
            <div className="input-field-s">
              <i className="fas fa-user"></i>
              <input
                type="email"
                placeholder="UserEmail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field-s">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="btn-s solid"
              onClick={handleLoginSubmit}
            />
            <p className="social-text-s">Or Sign in with social platforms</p>
            <div className="social-media-s">
              <a
                href="#"
                className="social-icon-s"
                onClick={handleLoginWithGoogle}
              >
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon-s" onClick={loginWithFacebook}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon-s" onClick={loginWithGithub}>
                <i className="fab fa-git"></i>
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
              <a href="#" className="social-icon-s" onClick={loginWithGoogle}>
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon-s" onClick={loginWithFacebook}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon-s" onClick={loginWithGithub}>
                <i className="fab fa-github"></i>
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
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignInSignUp;
