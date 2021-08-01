import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/de">
          <App />
        </Route>
        <Route path="/en">
          <App />
        </Route>
        <Route path="/">
          <Redirect to="/de" />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
