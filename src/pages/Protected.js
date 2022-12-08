import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;
   const navigate = useNavigate();
   useEffect(() => {
     let login = localStorage.getItem("login");
     if (!login) {
       navigate('/login');
     }
   });
  return (
    <>
    <h1>Protected</h1>
      <Component />
    </>
  );
};

export default Protected;
