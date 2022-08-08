import { Avatar, Stack } from '@mui/material'
import React from 'react'
import IMG from "../../Assets/Image/Anggi2.jpg"

function ResultPost() {

    const result = [
        {
            image : IMG,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore excepturi, mollitia totam, non placeat vitae incidunt tenetur recusandae, nemo quidem est sed exercitationem cumque possimus itaque ipsum fugiat accusamus eius. Fuga ex sit quod nulla nam placeat ut, repellendus dicta laudantium deserunt dolorum modi amet earum, quam ullam alias? Repudiandae commodi ex excepturi eligendi enim dolore corporis dolorem, dicta rem deserunt itaque laborum dolores architecto reiciendis vitae? Rem aspernatur assumenda saepe praesentium. Ipsum ullam repudiandae eum atque, sed sapiente tempore nesciunt minus dolores facere consequuntur, aperiam reiciendis molestiae incidunt et odio beatae porro suscipit, accusantium sint! Veritatis, pariatur iste."
        },
    ]

  return (
    <div style={{display : "flex", overflow : "auto", padding : "20px", width : "100%", flexDirection : "column"}}>
    {result.map((e) => {
        return <div className="p" style={{display : "flex", marginTop : "20px"}}>
        <Avatar src={e?.image} />
            <label  htmlFor="" style={{wordWrap : "break-word", textAlign : "left", marginLeft : "20px"}}>{e?.text}</label>
        </div>
    })}
    
    </div>
  )
}

export default ResultPost