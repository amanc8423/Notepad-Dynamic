import React from 'react'
import { useState } from 'react';

const Textarea = () => {

  const[text,setText]=useState(" ");
const func = (event)=>{
setText (event.target.value);
}

let mStyle = {
  display:"flex",
  justifyContent:"space-around",
  marginTop:"20px"
   }

   let s = {
    backgroundColor:"black",
    color:"white",
fontWeight:"bold",
fontSize:"15px"

   } 

   let s1 = {
    backgroundColor:"green",
    color:"white",
fontWeight:"bold",
fontSize:"15px"

   } 

  return(
    <>
      <div  style={mStyle}>  
<textarea name="ta1" id="t1" cols="56" rows="30" value={text} onChange={func} style={s1} ></textarea>
<textarea name="ta2" id="t2" cols="55" rows="30" value={text} style={s}></textarea>
</div>
    </>
  )
}

export default Textarea
