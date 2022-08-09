import React from 'react'
import Maps from '../../components/Maps Page/Maps'
import News from '../../components/Maps Page/News'
import SelectLocation from '../../components/Maps Page/SelectLocation'
import ShortProfile from '../../components/Maps Page/ShortProfile'

function MapsPage() {
  return (
    <div style={{display : "flex", flex : "33.3%", width : "100%", padding : "50px"}}>
        <div className="left" style={{display : "flex", flex : "1", justifyContent : "center", border : "1px solid black", borderRadius : "5px", height : "100vh", marginTop : "10px"}}>
            <ShortProfile/>
        </div>
        <div className="center" style={{display : "flex", flexDirection : "column", flex : "3", justifyContent : "center", marginLeft : "20px", height : "100vh"}}>
            <div className="up" style={{justifyContent : "center", display : "flex", flex : "1", borderRadius : "5px", height : "50%", paddingTop : "20px", paddingBottom : "70px"}}>
                <SelectLocation/>
            </div>
            <div className="down" style={{marginTop : "20px", display : "flex", border : '1px solid black', flex : "8", borderRadius : "5px", height : "50%"}}>
                <Maps/>
            </div>
        </div>
        <div className="right" style={{display : "flex", flex : "1", justifyContent : "center", border : "1px solid black", marginLeft : "40px", borderRadius : "5px", overflow : "auto", marginTop : "10px", height : "100vh"}}>
            <News/>
        </div>
    </div>
  )
}

export default MapsPage