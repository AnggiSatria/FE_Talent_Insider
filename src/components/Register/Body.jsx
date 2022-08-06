import FileUpload from './FileUpload'
import "../../Assets/CSS/App.scss"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useMutation } from "react-query"
import { Container, Col, Row } from "react-bootstrap"

function Body() {

    const [files, setFiles] = useState([{
        name: 'myFile.pdf'
    }])

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/")
    }

    const [register, setRegister] = useState({
        firstName : "",
        lastName : "",
        email : "",
        phone : "",
        password : "",
    })

    const handleChange = (e) => {
        setRegister({
            ...register,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(register);
    }

  return (
    <div  style={{width : "100%"}}>

        <div className="body" style={{width : "100%", display : "flex", flex : "50%", marginTop : "50px"}}>
           <div className="left" style={{flex : "1", marginTop : "100px", display : "flex", flexDirection : "column", alignItems : "center"}}>
            <div>
                <p>Upload File</p>
                <FileUpload files={files} setFiles={setFiles}/>
            </div>
        </div>

        <div className="blank" style={{border : "1px solid black", display : "flex", flexDirection : "column", height : "600px"}}></div>
        
        <div className="Right" style={{flex : "1"}}>
          <div >
            <form onSubmit={handleSubmit} style={{width : "400px", backgroundColor : "#fff", padding : "50px", borderRadius : "5px"}}>
                <div className="firstName">
                    <h4>Fist Name</h4>
                        <TextField id="outlined-search" label="First Name" type="text" style={{width : "100%"}} name="firstName" value={register.firstName} onChange={handleChange}/>
                </div>

                <div className="lastName" style={{marginTop : "20px"}}>
                    <h4>Last Name</h4>
                    <TextField id="outlined-search" label="Last Name" type="mail" style={{width : "100%"}} name="lastName" value={register.lastName} onChange={handleChange}/>
                </div>

                <div className="email" style={{marginTop : "20px"}}>
                    <h4>Email Address</h4>
                    <TextField id="outlined-search" label="Email" type="mail" style={{width : "100%"}} name="email" value={register.email} onChange={handleChange}/>
                </div>

                <div className="lastName" style={{marginTop : "20px"}}>
                    <h4>No Phone</h4>
                    <TextField id="outlined-search" label="No Phone" type="number" style={{width : "100%"}} name="phone" value={register.phone} onChange={handleChange}/>
                </div>

                <div className="password" style={{marginTop : "20px"}}>
                    <h4>Password</h4>
                    <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            style={{width : "100%"}}
                            name="password"
                            value={register.password}
                            onChange={handleChange}
                    />
                </div>      
            </form>
        </div>
        </div> 
        </div>
        
        <div className="button" style={{marginTop : "20px", marginBottom : "20px"}}>
            <Button type='submit' variant='contained' color='primary' style={{width : "40%", height : "40px", marginLeft : "30%", marginRight : "30%"}}>Register</Button>
        </div>
    </div>
  )
}

export default Body