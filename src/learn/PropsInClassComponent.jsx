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
