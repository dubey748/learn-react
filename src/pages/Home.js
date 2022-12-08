import React from "react";

import { Link, NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/nav">Nav</NavLink>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <ul>
        <li>
          {" "}
          <Link to="/user/ABhishek">ABhishek</Link>
        </li>
        <li>
          <Link to="/user/Janu">Janu</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
