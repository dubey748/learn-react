import React, { useState } from "react";

const ConditionalRendering = () => {
  // const [loggedIn, setLoggedIn]=useState(true)
  const [loggedIn, setLoggedIn] = useState();

  return (
    <>
      <h1>ConditionalRendering</h1>

      {/* {loggedIn ? <h3>I am true</h3> : <h3>I am False</h3>} if else, and below code for if else if */}
      {loggedIn == 1 ? (
        <h3>Welcome user 1</h3>
      ) : loggedIn == 2 ? (
        <h3>Welcome user 2</h3>
      ) : (
        <h3>Welcome user 3</h3>
      )}
    </>
  );
};

export default ConditionalRendering;
