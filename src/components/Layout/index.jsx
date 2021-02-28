import React from "react";

import { Link } from "react-router-dom";

import { Logout } from "../Logout";

export const Layout = ({ children }) => {
  const isLogged = localStorage.getItem("userId");

  return (
    <>
      <header>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            {isLogged && (
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
            )}
          </div>
          <div className="navbar-nav ml-auto">
            {!isLogged ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/registration">
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <Logout />
            )}
          </div>
        </nav>
      </header>
      {children}
    </>
  );
};
