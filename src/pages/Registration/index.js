import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegistrationAction } from "../../actions";
import { Redirect } from "react-router-dom";
import { Layout } from "../../components/Layout";

export const Registration = () => {
  const formRef = useRef(null);
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  if (state.isRegister) {
    return <Redirect to={"/login"} />;
  }

  if (state.isFail) {
    console.log("show Error");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      username,
      password,
      repassword,
    } = e.target.elements;
    if (password.value === repassword.value) {
      dispatch(
        RegistrationAction(
          firstName.value,
          lastName.value,
          username.value,
          password.value
        )
      );
    } else {
      console.log("Passwords does not match");
    }
  };
  return (
    <Layout>
      <div className="container">
        <div className="col-6 offset-3">
          <div className="my-3 p-5 bg-light border border-dark">
            <h1>Registration</h1>
            <form ref={formRef} onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="password">First name</label>
                <input
                  required
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="firstName"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Last name</label>
                <input
                  required
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="lastName"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Username</label>
                <input
                  required
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
                  required
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Re-password</label>
                <input
                  required
                  type="password"
                  name="repassword"
                  id="repassword"
                  placeholder="repassword"
                  className="form-control"
                />
              </div>
              <button className="btn btn-primary btn-block" type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
