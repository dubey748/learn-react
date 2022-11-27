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

function App() {

  function PassFunction(){
    alert("Calling from App")
  }
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
      <PassFunctionAsProps data={PassFunction}/>
    </>
  );
}

export default App;
