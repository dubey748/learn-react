import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () =>{
  const login=()=>{
    localStorage.setItem('login', true)
    navigate('/');
  }
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem('login');
    if (login) {
      navigate('/');
    }
  });
  return (
    <>
    <h1>Hello from Login</h1>
    <input type="text"></input><br></br>
    <input type="text"></input><br></br>
    <button onClick={login}>Login</button>

       
    </>
  )
}

export default Login