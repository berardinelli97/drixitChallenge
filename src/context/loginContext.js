import React from "react";

export const initialState = { logged: false, email: false, password: false };

export function reducer(state, action) {
  switch (action.type) {
    case "setLogged":
      return { logged: true, email: action.email, password: action.password };
    case "setUnlogged":
      return { logged: false, email: null, password: null };
    default:
      break;
  }
}

const LoginContext = React.createContext();
export default LoginContext;
