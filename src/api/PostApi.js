import React, { useState, useEffect } from "react";

const PostApi = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  function saveUser(){
    /* console.log(name,email, address) */
    let data={name,email, address}
    fetch("http://localhost:3000/users", {
        method :"POST",
        headers:{
            'Accept':'application/json',
            'content-Type':'application/json',
        },
        body:JSON.stringify(data)
    }).then((result)=>{
        console.log(result);
        result.json().then((res)=>{
            console.log(res)
        })
    })
  
}
 
  return (
    <>
      <h1>Post Method</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        name="name"
      />{" "}
      <br></br>
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        name="email"
      />{" "}
      <br></br>
      <input
        type="text"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        name="address"
      />{" "}
      <br></br>
      <button type="button" onClick={()=>saveUser()}>Click to Submit</button>
    </>
  );
};

export default PostApi;
