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
import "../../Assets/CSS/RegisterResponsive.scss"

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
        handleNavigate()
    }

  return (
    <div className='Alls' >

        <div className="bodys" >
           <div className="lefts" >
            <div>
                <p>Upload File</p>
                <FileUpload files={files} setFiles={setFiles}/>
            </div>
        </div>

        <div className="blank"></div>
        
        <div className="Rights" >
          <div >
            <div className='forms' >
                <div className="firstNames">
                    <h4>Fist Name</h4>
                        <TextField className='firstNames2' id="outlined-search" label="First Name" type="text" name="firstName" value={register.firstName} onChange={handleChange}/>
                </div>

                <div className="lastNames">
                    <h4>Last Name</h4>
                    <TextField id="outlined-search" className='lastNames2' label="Last Name" type="mail" name="lastName" value={register.lastName} onChange={handleChange}/>
                </div>

                <div className="emails">
                    <h4>Email Address</h4>
                    <TextField className='emails2' id="outlined-search" label="Email" type="mail" name="email" value={register.email} onChange={handleChange}/>
                </div>

                <div className="phones">
                    <h4>No Phone</h4>
                    <TextField className='phones2' id="outlined-search" label="No Phone" type="number" name="phone" value={register.phone} onChange={handleChange}/>
                </div>

                <div className="passwords">
                    <h4>Password</h4>
                    <TextField
                            className='passwords2'
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            name="password"
                            value={register.password}
                            onChange={handleChange}
                    />
                </div>      
            </div>
        </div>
        </div> 
        </div>
        
        <div className="buttons" style={{marginBottom : "20px"}}>
            <Button className='buttons2' type='submit' onClick={handleSubmit} variant='contained' color='primary' >Register</Button>
        </div>
    </div>
  )
}

export default Body