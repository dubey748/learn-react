import React, {useState,useEffect} from 'react'

const UseEffectWithCondition = (props) => {
    // const [data, setData]= useState(0) 
    // const [update, setUpdate]=useState(0)
    useEffect(()=>{
        console.log("Hi from data")
    },[props.data] )
     useEffect(()=>{
         console.log("Hi from update")
     }, [props.update])
  return (
    <>
        <h1>{props.data} </h1>
        <h1>{props.update} </h1>
        {/* <button onClick={()=>setData(data+1)}>Data </button>
        <button onClick={()=>setUpdate(update+1)}>Update</button> */}

    </>
  )
}

export default UseEffectWithCondition