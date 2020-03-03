import React from "react";
import { getUsersData } from "../../constants/mockedData";
import "./styles.css";

function Home({ location }) {
  const { email, password } = location.state;
  const userData = getUsersData(email);
  const { id, avatar, name, surname, age, role } = userData;
  return (
    <div>
      <p>{id}</p>
      <p>{avatar}</p>
      <p>{email}</p>
      <p>{password}</p>
      <p>{name}</p>
      <p>{surname}</p>
      <p>{age}</p>
      <p>{role}</p>
    </div>
  );
}

export default Home;
