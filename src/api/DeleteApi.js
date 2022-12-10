import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const DeleteApi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
   getUser();
  }, []);
  // console.log(data)

  const getUser=()=>{
    fetch("http://localhost:3000/users").then((result) => {
        result.json().then((res) => {
          // console.log(res)
          setData(res);
        });
      });
  }

  const deleteUser = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        console.log(res);
        getUser()
      });
    });
  };
  return (
    <>
      <h1>DeleteApi</h1>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th> Name</th>
            <th>email</th>
            <th>password</th>
            <th>Delete User</th>
          </tr>
        </thead>
        {data.map((item, i) => (
          <tbody>
            <tr key={i}>
              <td>{item.id}</td>

              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>
                <button
                  onClick={() => {
                    deleteUser(item.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </>
  );
};

export default DeleteApi;
