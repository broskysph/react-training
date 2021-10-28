import React from 'react'

//you can add export
const divStyle = {
  border:"5px solid gold", 
  width:"30%", 
  margin:"0 35% 0 35%", //top right bottom left
  borderRadius:'15px'
}

export default function TitleComponent({text}) {
  return (
    // <div style={{border: "5px solid aqua", width:"20%", margin: "0 40%", borderRadius:"10px"}}>
    <div style={divStyle}>
     {text}
    </div>
  )
}
