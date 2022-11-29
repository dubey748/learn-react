import UpdateData from "./learn/UpdateData";
import StateWithClass from "./learn/StateWithClass";
import PropsWithFunctionalComponent from "./learn/PropsWithFunctionalComponent";
import PropsInClassComponent from "./learn/PropsInClassComponent";
import GetInputBoxValue from "./learn/GetInputBoxValue";
import ShowAndToggle from "./learn/ShowAndToggle";
import HandleForm from "./learn/HandleForm";
import ConditionalRendering from "./learn/ConditionalRendering";
import BasicFormValidation from "./learn/BasicFormValidation";
import PassFunctionAsProps from "./learn/PassFunctionAsProps"
import UseEffectHooks from "./learn/UseEffectHooks";
import  UseEffectWithCondition  from "./learn/UseEffectWithCondition";
import React,{useState,useEffect} from "react";
function App() {
  const [data, setData]= useState(0) 
  const [update, setUpdate]=useState(0)

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
      <UseEffectWithCondition data={data} update={update}/>
      <button onClick={()=>setData(data+1)}>Data </button>
        <button onClick={()=>setUpdate(update+1)}>Update</button>
    </>
  );
}

export default App;
