import React, { useEffect, useRef } from "react";

const PreviousPropsWithHooks = (props) => {
  const lastVal = useRef();
  useEffect(() => {
    lastVal.current = props.count;
  })
  const preVal = lastVal.current;
  return (
    <>
      <h1>PreviousPropsWithHooks</h1>
      <h2>Current Value-{props.count}</h2><br></br>
      <h2>Previous Value - {preVal}</h2>
    </>
  );
};

export default PreviousPropsWithHooks;
