import React from 'react'

const Navbar = () => {

    let myStyle = {
        display:"flex",
        justifyContent:"center",
        alignItems : "center",
        backgroundColor:"burlywood",
        color:"blue",
        fontWeight:"bold",
        fontSize:"50px"
    }
  return (
    <div>
      
<div className="navbar" style={myStyle}>
    MAGICAL NOTEPAD
</div>

    </div>
  )
}

export default Navbar
