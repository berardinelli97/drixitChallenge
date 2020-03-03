import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../../screens/Home";
import Login from "../../screens/Login";
import { Redirect } from "react-router";
import LoginContext from "../../context/loginContext";

function Routes() {
  const { state } = useContext(LoginContext);

  return (
    <Router>
      <div>
        <Route
          exact
          path="/"
          render={() =>
            state.logged ? (
              <Redirect
                to={{
                  pathname: "/home",
                  state: { email: state.email, password: state.password }
                }}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route path="/home" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </div>
    </Router>
  );
}

export default Routes;
