import React, { useState } from "react";

const StateWithObject = () => {
  const [data, setData] = useState({ name: "ABhishek", age: 24 });
  return (
    <>
      <h1>StateWithObject</h1>
      <p>{data.name}</p>
      <p>{data.age}</p>
      <input
        type="text"
        placeholder="name"
        value={data.name}
        onChange={(e) => {
          setData({ ...data, name: e.target.value });
        }}
      ></input>
      <input
        type="text"
        placeholder="age"
        value={data.age}
        onChange={(e) => {
          setData({ ...data, age: e.target.value });
        }}
      ></input>
    </>
  );
};

export default StateWithObject;
