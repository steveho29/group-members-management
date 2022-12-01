import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

// Import Image
import LoginImg from "../../assets/img/login-banner.png";

// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { appDispatch } from "../../store/appDispatch";

import { toastifyAction } from "../../store/toastifySlice";
import { login } from "../../store/authSlice";

const Login = () => {
  const { isAuth } = useSelector(state => state.auth)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toastify = useSelector((state) => state.toastify);
  const dispatch = useDispatch();
  const history = useHistory()
  const handleLogin = async (e) => {
    e.preventDefault();
    await appDispatch(dispatch, login({ email, password }));
    history.push({ pathname: '/dashboard' })
  };
  useEffect(() => {
    const { message, type } = toastify;
    if (!message) return;
    toast(message, { type: type });
    dispatch(toastifyAction.clearMessage());
  }, [toastify]);

  useEffect(() => {
    if (isAuth) history.push({ pathname: '/dashboard' })
  }, [])

  return (
    <div>
      {/* Page Content */}
      <div className="account-page">
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* Login Tab Content */}
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>
                          Login 
                        </h3>
                      </div>
                      <form action="/">
                        <div className="form-group form-focus">
                          <input
                            type="email"
                            className="form-control floating"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label className="focus-label">Email</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="password"
                            className="form-control floating"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label className="focus-label">Password</label>
                        </div>
                        <div className="text-right">
                          <Link to="#" className="forgot-link">
                            Forgot Password ?
                          </Link>
                        </div>
                        <button
                          className="btn btn-primary btn-block btn-lg login-btn"
                          type="submit"
                          onClick={handleLogin}
                        >
                          Login
                        </button>
                      </form>
                      <div className="login-or">
                        <span className="or-line"></span>
                        <span className="span-or">or</span>
                      </div>
                      <div className="row form-row social-login">
                        <div className="col-6">
                          <Link to="#" className="btn btn-facebook btn-block">
                            <FontAwesomeIcon
                              icon={faFacebookF}
                              className="mr-1"
                            />{" "}
                            Login
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="#" className="btn btn-google btn-block">
                            <FontAwesomeIcon icon={faGoogle} className="mr-1" />{" "}
                            Login
                          </Link>
                        </div>
                      </div>
                      <div className="text-center dont-have">
                        Don’t have an account?{" "}
                        <Link to="#">Register</Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Login Tab Content */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Content */}
    </div>
  );
};
export { Login };
