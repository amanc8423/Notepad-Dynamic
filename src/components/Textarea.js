import React from 'react'

const Textarea = () => {

let mStyle = {
  display:"flex",
  justifyContent:"space-around",
  marginTop:"20px",
   }
  return(

    <>
      <div  style={mStyle}>  
<textarea name="ta1" id="t1" cols="56" rows="30"></textarea>
<textarea name="ta2" id="t2" cols="55" rows="30"></textarea>
</div>

    </>
  )
}

export default Textarea
