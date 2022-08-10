import React from 'react'
import News from '../../components/Homepage/News'
import Post from '../../components/Homepage/Post'
import ResultPost from '../../components/Homepage/ResultPost'
import ShortProfile from '../../components/Homepage/ShortProfile'
import IMG from "../../Assets/Image/bg.jpg"
import "../../Assets/CSS/bg.css"
import "../../Assets/CSS/Responsive.scss"

function Homepage() {

  document.body.style.backgroundImage={IMG}

  return (
    <div className='container'>
      <div className="left">
        <ShortProfile/>
      </div>
      <div className="center">
        <div className="up">
          <Post/>
        </div>
        <div className="down">
          <ResultPost/>
        </div>
      </div>
      <div className="right">
        <News/>
      </div>

    </div>
  )
}

export default Homepage