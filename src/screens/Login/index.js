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
          <h1>Iniciar Sesion</h1>

          <form onSubmit={onSubmit}>
            <div className="campo-form">
              <label htmlFor="email"> Email </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Tu Email"
                value={email}
                onChange={onChange}
              />
            </div>
            <div className="campo-form">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={onChange}
              />
            </div>
            {errorEmail && <p>El email ingresado es incorrecto</p>}
            {errorPassword && <p>La contraseña ingresada es incorrecta</p>}
            <div className="campo-form">
              <button
                className="btn tbn-primario btn-block"
                onClick={handleClick}
              >
                Iniciar Sesion
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
