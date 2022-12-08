import React, { useEffect, useState } from "react";

const GetApi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users").then((result) => {
      result.json().then((res) => {
        // console.log(res)
        setData(res);
      });
    });
  }, []);
  // console.log(data)

  return (
    <>
      <h1> Get Method</h1>
      <table border="1px">
        <tr>
          <td>name</td>
          <td>email</td>
          <td>address</td>
          
        </tr>
        {data.map((item) => 
          <tr >
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address}</td>
            
          </tr>
        )}
      </table>
    </>
  );
};

export default GetApi;
