import React, { useReducer } from "react";
import Routes from "../Routes";
import LoginContext, {
  initialState,
  reducer
} from "../../context/loginContext";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      <Routes />
    </LoginContext.Provider>
  );
}

export default App;
