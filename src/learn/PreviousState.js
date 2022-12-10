import React, {useState} from 'react'


const PreviousState = () => {

const [count, setCount]=useState(1)
const updateCounter=()=>{
   /*  let randm=Math.floor(Math.random()*100)
    setCount((pre)=>{
        console.log(pre);
        return randm
    }) */
    for(let i=0;i<5;i++){
        setCount((pre)=>pre+1)
    }

    
}
  return (
    <>
        <h1>PreviousState</h1>
        <h2>{count}</h2>
        <button onClick={()=>{updateCounter()}}>Click me to Update Counter</button>
    </>
  )
}

export default PreviousState