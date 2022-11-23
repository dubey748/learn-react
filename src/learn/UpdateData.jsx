import {useState} from "react";

const UpdateData = () => {
const [data, setData]=useState(0)
 function update(){
  setData(data+1)
 }
  
  return (
    <>
     
     <h1>{data}</h1>
     <button onClick={()=>{update()}}>Update me</button>
    </>
  );
};

export default UpdateData;
