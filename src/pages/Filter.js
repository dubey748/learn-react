import React from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("age"));
  console.log(searchParams.get("city"));
  const age = searchParams.get("age");
  const city = searchParams.get("city");
  return (
    <>
      <h1>Filter Page</h1>
      <h2>Age is : {age}</h2>
      <h2>City is : {city}</h2>
      <Button onClick={() => setSearchParams({ age: 24 })}>
        Click to change age in searchParams
      </Button>
      <Button onClick={() => setSearchParams({ city: "Gkp"})}>
        Click to change age in searchParams
      </Button>
      <input type="text" onChange={(e)=>setSearchParams({text:e.target.value})} placeholder="Set the value here"></input>
    </>
  );
};

export default Filter;
