import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <ul>
      <li>
        {" "}
        <Link to="/">Home</Link>
      </li>
      <li>
        {" "}
        <Link to="/Nav">Nav</Link>
      </li>
    </ul>
  );
};

export default About;
