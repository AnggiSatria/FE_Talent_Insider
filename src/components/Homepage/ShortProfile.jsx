import React from 'react'   
import IMG from "../../Assets/Image/bg.jpg"

function ShortProfile() {
  return (
    <div style={{display : "flex", alignItems : "center", flexDirection : "column"}}>
        <div className="img">
            <img src={IMG} alt="" width={200} style={{marginTop : "50px", borderRadius : "5px"}}/>
        </div>
        <div className="name" style={{marginTop : "30px"}}>
            <h5 style={{color : "rgba(80, 16, 56, 0.31)"}}>Anggi Satria</h5>
        </div>
        <div className="email" style={{marginTop : "30px"}}>
            <h5>anggisatria122@gmail.com</h5>
        </div>
        <div className="phone" style={{marginTop : "30px"}}>
            <h5>0895321589992</h5>
        </div>
    </div>
  )
}

export default ShortProfile