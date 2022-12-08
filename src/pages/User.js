import React from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const { name } = params;

  return (
    <>
      <h1>Hi from {name}'s page </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
      </ul>
      
    </>
  );
};

export default User;
