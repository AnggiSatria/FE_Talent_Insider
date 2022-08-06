import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Form() {
    
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/register")
    }

    const [login, setLogin] = useState({
        email : "",
        password : ""
    })

    const handleOnChange = (e) => {
        setLogin({
            ...login,
            [e.target.name] : e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault() 
        console.log(login);
    }

  return (
    <div style={{marginTop : "50px"}}>
        <form onSubmit={handleOnSubmit} style={{width : "400px", backgroundColor : "#fff", margin : "auto", padding : "50px", borderRadius : "5px"}}>
            <div className="email" style={{}}>
                <TextField id="outlined-search" label="Email" type="search" style={{width : "100%"}} name="email" value={login.email} onChange={handleOnChange}/>
            </div>

            <div className="password" style={{marginTop : "20px"}}>
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    style={{width : "100%"}}
                    name="password"
                    value={login.password}
                    onChange={handleOnChange}
                />
            </div>      

            <div className="button" style={{marginTop : "20px"}}>
                <Button variant='contained' color='primary' style={{width : "100%", height : "40px"}}>Login</Button>
            </div>

            <div className="button" style={{marginTop : "20px"}}>
                <Button onClick={handleNavigate} variant="outlined" style={{width : "100%", height : "40px"}}>Register</Button>
            </div>
        </form>
    </div>
  )
}

export default Form