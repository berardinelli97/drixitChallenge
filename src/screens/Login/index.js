import React, { useState, Fragment, useContext } from "react";
import { Redirect } from "react-router";
import { getUsersData } from "../../constants/mockedData";
import LoginContext from "../../context/loginContext";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { state, dispatch } = useContext(LoginContext);

  const [errorEmail, setErrorEmail] = useState(false);

  const [errorPassword, setErrorPassword] = useState(false);

  const { email, password } = user;

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  const handleClick = () => {
    const userData = getUsersData(user.email);
    if (userData) {
      if (userData.password === user.password) {
        dispatch({
          type: "setLogged",
          email: userData.email,
          password: userData.password
        });
      } else {
        setErrorPassword(true);
      }
    } else {
      setErrorEmail(true);
    }
  };

  if (state.logged) {
    return (
      <Redirect
        to={{
          pathname: "/home",
          state: { email: state.email, password: state.password }
        }}
      />
    );
  }

  return (
    <Fragment>
      <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
          <h1>Log in</h1>

          <form onSubmit={onSubmit}>
            <div className="campo-form">
              <label htmlFor="email"> Email </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={onChange}
              />
            </div>
            <div className="campo-form">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={onChange}
              />
            </div>
            {errorEmail && <p>The email entered is incorrect</p>}
            {errorPassword && <p>The password entered is incorrect</p>}
            <div className="campo-form">
              <button
                className="btn tbn-primario btn-block"
                onClick={handleClick}
              >
                Log in
              </button>
              <formulario />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
