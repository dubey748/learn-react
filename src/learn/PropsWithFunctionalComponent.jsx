import React from "react";

const PropsWithFunctionalComponent = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <h2>{props.email}</h2>
    </>
  );
};

export default PropsWithFunctionalComponent;
