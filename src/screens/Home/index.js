import React from "react";
import { getUsersData } from "../../constants/mockedData";

function Home({ location }) {
  const { email, password } = location.state;
  const userData = getUsersData(email);
  const { id, avatar, name, surname, age, role } = userData;
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>{name} </h1>
        <p>Surname: {surname}</p>
        <p>ID: {id}</p>
        <p>Avatar: {avatar}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Age: {age}</p>
        <p>Role: {role}</p>
      </div>
    </div>
  );
}

export default Home;
