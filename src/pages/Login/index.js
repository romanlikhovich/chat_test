import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../actions";
import { Layout } from "../../components/Layout";
import { Link } from "react-router-dom";

export const Login = () => {
  const [userName, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  if (state.isFail) {
    console.log("show Error");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(LoginAction(userName, password));
  };

  const usernameChange = (event) => {
    setUsername(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Layout>
      <div className="container">
        <div className="col-6 offset-3">
          <div className="my-3 p-5 bg-light border border-dark">
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  onChange={usernameChange}
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  onChange={passwordChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="form-control"
                />
              </div>
              <button className="btn btn-primary btn-block" type="submit">
                Login
              </button>
            </form>
            <div className="mt-1">
              New to Chat? <Link to="/registration">SIGN UP</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
