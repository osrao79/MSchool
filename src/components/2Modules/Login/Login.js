import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Work from "../../../assets/Work.jpg";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function validateEmail(email) {
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  }
  console.log(validateEmail(email));
  return (
    <div className="login-main">
      <div className="login-container">
        <div className="login-ui">
          <div className="login-image">
            <img src={Work} alt="workImage" />
          </div>
        </div>
        <div className="login-form">
          <div className="form-title">
            <div className="title">Login to your account</div>
          </div>
          <div className="login-menu">
            <div className="navigation-menu-container">
              <button type="button" className="navigation-menu-item">
                Email
              </button>
              <button type="button" className="navigation-menu-item">
                Mobile
              </button>
            </div>
          </div>
          <div className="login-form-wrapper">

            <div className="   ">
              <div className="field-title">Email</div>
              <input
                className="form-control-edit-field"
                id="email"
                type="text"
                placeholder="Your Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>

            <div className="login-form-detail">
              <div className="field-title">Password</div>
              <input
                className="form-control-edit-field "
                id="password"
                type="password"
                placeholder="Your Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className="login-form-button">
              <Button variant="contained" color="primary">
                Log in
              </Button>
            </div>

          </div>
        </div>

        {/* 

                            <div className="row justify-content-center">
                                <div className="forgot-password-wrapper col-md-10 col-12"><a className="forgot-password" href="/forgot_password">Forgot Password</a>
                                </div>
                            </div>
                        
                        <div className="row justify-content-md-center justify-content-end">
                            <div className="register-wrapper d-flex flex-md-row flex-column"><span>Don't have an account? </span>
                                <a className="register-link" href="/register">Apply to Newton School</a>
                            </div> */}
      </div>
    </div>
  );
}

export default Login;
