import React from 'react'
import IMG from "../../Assets/Image/TI.jpeg"

function News() {

    const news = [
        {
            image : IMG,
            text : "Talent Insider Sedang membuk lowongan untuk FrontEnd Developer",
        },
    ]

  return (
    <div style={{display : "flex", flexDirection : "column"}}>
        {news.map((e) => {
            return <div style={{padding : "20px", display : "flex", flexDirection : "column"}}>              
                <a href="">
                    <img src={e?.image} alt="" style={{marginTop : "20px"}}/>
                    <h6 style={{textAlign : "center"}}>{e?.text}</h6>
                </a>
            </div>
        })}
    </div>
    
  )
}

export default News