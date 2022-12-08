import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UpdateData from "./learn/UpdateData";
import StateWithClass from "./learn/StateWithClass";
import PropsWithFunctionalComponent from "./learn/PropsWithFunctionalComponent";
import PropsInClassComponent from "./learn/PropsInClassComponent";
import GetInputBoxValue from "./learn/GetInputBoxValue";
import ShowAndToggle from "./learn/ShowAndToggle";
import HandleForm from "./learn/HandleForm";
import ConditionalRendering from "./learn/ConditionalRendering";
import BasicFormValidation from "./learn/BasicFormValidation";
import PassFunctionAsProps from "./learn/PassFunctionAsProps";
import UseEffectHooks from "./learn/UseEffectHooks";
import UseEffectWithCondition from "./learn/UseEffectWithCondition";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Protected from "./pages/Protected"
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./pages/Nav";
import User from "./pages/User";
import Filter from "./pages/Filter"
import Login from "./pages/Login"
import Api from "./api/Api";
function App() {
  /*  const [data, setData]= useState(0) 
  const [update, setUpdate]=useState(0) */

  // function PassFunction(){
  //   alert("Calling from App")
  // }
  return (
    <>
      {/* <UpdateData /> */}
      {/* <StateWithClass/> */}
      {/*  <PropsWithFunctionalComponent name={"ABhishek"} email={"abc@"}/>
      <PropsWithFunctionalComponent name={"Himanshi"} email={"abc@"}/> */}
      {/* <PropsInClassComponent name="ABhishek" />
      <button onClick={()=>{}}>UpdateName</button> */}
      {/* <GetInputBoxValue/> */}
      {/* <ShowAndToggle/> */}
      {/* <HandleForm/> */}
      {/* <ConditionalRendering /> */}
      {/* <BasicFormValidation/> */}
      {/* <PassFunctionAsProps data={PassFunction}/> */}
      {/* <UseEffectHooks/> */}
      {/*  <UseEffectWithCondition data={data} update={update}/>
      <button onClick={()=>setData(data+1)}>Data </button>
        <button onClick={()=>setUpdate(update+1)}>Update</button> */}
      {/* <Button onClick={()=>{alert("Hello")}}>Click me</Button> */}

      <BrowserRouter>
        <Routes>

        <Route path="/*" element={<Navigate to='/'/>}></Route>
          <Route path="/" element={<Protected Component={Home}/>}/>
          <Route path="/about" element={<Protected Component={About}/>}></Route>
          <Route path="/nav" element={<Protected Component={Nav}/>}></Route>
          <Route path="/user/:name" element={<Protected Component={User}/>}></Route>
          <Route path="/filter" element={<Filter/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/api" element={<Api/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
