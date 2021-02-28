import React from "react";
import { useDispatch } from "react-redux";
import {Link, Redirect} from "react-router-dom";
import { LogoutAction } from "../../actions/";

export const Logout = () => {
  const dispatch = useDispatch();

  const removeLocaleStorage = (e) => {
    e.preventDefault();
    dispatch(LogoutAction());
  };

  return (
    <li className="nav-item">
      <Link className="nav-link" to="/login" onClick={removeLocaleStorage}>
        Log Out
      </Link>
    </li>
  );
};
