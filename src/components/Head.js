import React from 'react'

const Head = () => {
    let myStyle = {
        display:"flex",
        justifyContent:"center",
        alignItems : "center",
        backgroundColor:"red",
        color:"white",
        fontWeight:"bold",
        fontSize:"20px",
        marginTop:"30px",
        marginLeft:"50px",
        marginRight:"50px"
    }

  return (
    <div>
      <div className='head' style={myStyle}>
      Write on left textarea it will magically write on right one       </div>
    </div>
  )
}

export default Head
