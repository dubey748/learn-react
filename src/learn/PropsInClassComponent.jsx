import React, { Component } from "react";

export default class PropsInClassComponent extends Component {

    
  render() {
    
    return (
        
      <>
        <h1>Student name is {this.props.name}</h1>
      </>
    );
  }
}

/* Write this in app.js 
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
*/
