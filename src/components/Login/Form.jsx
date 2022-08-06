import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Form() {

    const [login, setLogin] = useState({
        email : "",
        password : ""
    })

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.prevantDefault()
        console.log(login);
    }

  return (
    <div>
        <form action="">
            <div className="email">
                <input type="text" placeholder='email'/>
            </div>
            <div className="password">
                <input type="password" placeholder='password'/>
            </div>        
        </form>
    </div>
  )
}

export default Form