import React, { useState, useEffect } from "react";

const UseEffectHooks = () => {
  useEffect(() => {
    console.log("Hello from useEffect");
  });
  const [data, setData] = useState(0);

  return (
    <>
      <h1>{data}</h1>
      <button onClick={() => setData(data + 1)}>click me </button>
    </>
  );
};

export default UseEffectHooks;
