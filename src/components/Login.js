import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  return (
    <div className="login_page_wrapper">
      <div className="sidePanel"></div>
      <div className="centerPart">
        <div className="header">
          <div>XYZ NAME</div>
          <div className="mr-4">LOGO</div>
        </div>
        <div className="background">
          <div className="justify-content-center login-wrapper">
            <div className="login">
              <form className="signup-form">
                <h2 className="text-center text-heading">Login</h2>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email Address" required="required" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Password" required="required" />
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-blue btn-block" onClick={() => history.push("/dashboard")}>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
