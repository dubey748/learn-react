import React from 'react'

function PassFunctionAsProps(props) {
  return (
    <>
        <button onClick={()=>{props.data()}}>Click me to call function as props</button>
    </>
  )
}

export default PassFunctionAsProps