import React, { useEffect, useState } from "react";

const Api = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
      result.json().then((res) => {
        // console.log(res)
        setData(res);
      });
    });
  }, []);
  // console.log(data)

  return (
    <>
      <h1>Fetch</h1>
      <table border="1px">
        <tr>
          <td>userId</td>
          <td>id</td>
          <td>title</td>
          <td>body</td>
        </tr>
        {data.map((item) => 
          <tr >
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        )}
      </table>
    </>
  );
};

export default Api;
