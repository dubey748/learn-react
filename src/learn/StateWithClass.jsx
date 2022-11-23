import React, {Component} from 'react'

class StateWithClass extends Component {
constructor(){
    super();
this.state={
    data:"ABhishek"
}
    
}
 update(){
    this.setState({data:"dubey748"})
   }

    render()
    {
        return (
            <>
                <h1>{this.state.data}</h1>
                <button onClick={()=>{this.update()}}>Update me</button>
            </>
        )
        
    }
}

export default StateWithClass