import React from 'react'
import News from '../../components/Homepage/News'
import Post from '../../components/Homepage/Post'
import ResultPost from '../../components/Homepage/ResultPost'
import ShortProfile from '../../components/Homepage/ShortProfile'
import IMG from "../../Assets/Image/bg.jpg"
import "../../Assets/CSS/bg.css"

function Homepage() {

  document.body.style.backgroundImage={IMG}

  return (
    <div style={{display : "flex", flex : "33.3%", width : "100%", padding : "50px"}}>
      <div className="left" style={{display : "flex", flex : "1", justifyContent : "center", border : "1px solid black", borderRadius : "5px", height : "100vh", marginTop : "10px"}}>
        <ShortProfile/>
      </div>
      <div className="center" style={{display : "flex", flexDirection : "column", flex : "3", justifyContent : "center", marginLeft : "20px", height : "100vh"}}>
        <div className="up" style={{justifyContent : "center", display : "flex", border : "1px solid black", flex : "1", borderRadius : "5px", height : "50%", marginTop : "40px"}}>
          <Post/>
        </div>
        <div className="down" style={{marginTop : "20px", display : "flex", border : '1px solid black', flex : "4", borderRadius : "5px", height : "70%"}}>
          <ResultPost/>
        </div>
      </div>
      <div className="right" style={{display : "flex", flex : "1", justifyContent : "center", border : "1px solid black", marginLeft : "40px", borderRadius : "5px", overflow : "auto", marginTop : "10px", height : "100vh"}}>
        <News/>
      </div>

    </div>
  )
}

export default Homepage