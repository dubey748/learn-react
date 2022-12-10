import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const UpdateAPI = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    getUser();
  }, []);
  // console.log(data)

  const getUser = () => {
    fetch("http://localhost:3000/users").then((result) => {
      result.json().then((res) => {
        // console.log(res)
        setData(res);
        setName(res[0].name);
        setEmail(res[0].email);
        setAddress(res[0].address);
        setUserID(res[0].id);
      });
    });
  };

  const deleteUser = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        console.log(res);

        getUser();
      });
    });
  };
  const selectUser = (id) => {
    const dataId = data[id - 1];
    setName(dataId.name);
    setEmail(dataId.email);
    setAddress(dataId.address);
    setUserID(dataId.id);
  };

  const updateUser = () => {
    let item = { name, email, address, userID };
    fetch(`http://localhost:3000/users/${userID}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((res) => {
        console.log(res);

        getUser();
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
            <th>Select User</th>
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
              <td>
                {" "}
                <button
                  onClick={() => {
                    selectUser(item.id);
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br></br>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br></br>
        <input
          type="text"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />{" "}
        <br></br>
        <button
          onClick={() => {
            updateUser();
          }}
        >
          Update User
        </button>
      </div>
    </>
  );
};

export default UpdateAPI;
