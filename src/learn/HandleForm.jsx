import React, { useState } from "react";

const HandleForm = () => {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");
  function getFormData(e) {
    console.warn(name,interest,tnc)
    e.preventDefault();
  }
  return (
    <>
      <h1>HandleForm</h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)} /> <br />
        <br />
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>Select Options</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>{" "}
        <br />
        <br />
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/>
        <span>Accept Terms and conditions</span>
        <br />
        <br />
        <button type="submit">Submit</button>
        <button>Clear</button>
      </form>
    </>
  );
};

export default HandleForm;
