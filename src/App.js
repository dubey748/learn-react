import UpdateData from "./learn/UpdateData";
import StateWithClass from "./learn/StateWithClass";
import PropsWithFunctionalComponent from "./learn/PropsWithFunctionalComponent";
import PropsInClassComponent from "./learn/PropsInClassComponent";
import { Component } from "react";
import React from "react";

class App extends React.Component {
constructor(){
  super();
  this.state={
    name:"ABhishek"
  }
}

  render() {
    return (
      <>
        {/* <UpdateData /> */}
        {/* <StateWithClass/> */}
        {/*  <PropsWithFunctionalComponent name={"ABhishek"} email={"abc@"}/>
      <PropsWithFunctionalComponent name={"Himanshi"} email={"abc@"}/> */}
        <PropsInClassComponent name={this.state.name} />
        <button onClick={() => {this.setState({name:"dubey748"})}}>UpdateName</button>
      </>
    );
  }
}

export default App;
