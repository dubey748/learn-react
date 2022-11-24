import React, { useState } from "react";

function GetInputBoxValue() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(val) {
    setData(val.target.value);
    setPrint(false) //hide data while typing
  } 
  return (
    <>
      {/* <h1>Get Input Box Value, And entered data is, {data} </h1> */}
      {print ? <h1>{data} </h1> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}> Click me to print your Data</button>
    </>
  );
}

export default GetInputBoxValue;
