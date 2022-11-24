import React, { useState } from "react";

function ShowAndToggle() {
  const [status, setStatus] = useState(true);
  return (
    <>
      {status ? <h1>ShowAndToggle</h1> : null}

      <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button>
      <button onClick={() => setStatus(!status)}>Toogle me</button>
    </>
  );
}

export default ShowAndToggle;
