import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { store } from "./store";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { Registration } from "./pages/Registration";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <PublicRoute path={"/login"}>
            <Login />
          </PublicRoute>
          <PublicRoute path={"/registration"}>
            <Registration />
          </PublicRoute>
          <PrivateRoute path={"/"}>
            <Main />
          </PrivateRoute>
          <PrivateRoute path={"/logout"} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
