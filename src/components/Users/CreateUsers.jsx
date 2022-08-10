import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import "../../Assets/CSS/CreateUserResponsive.scss"

function CreateUsers() {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/list-user")
  }

  const [users, setUsers] = useState({
    firstName : "",
    lastName : "",
    email : "",
    phone : "",
    password : ""

  })

  const handleChange = (e) => {
    setUsers({
      ...users,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(users);
    handleNavigate()
  }

  return (
    <div className='alls'>
      <div className="txt">
        <h4>Create Users</h4>
      </div>
      <div className='form'>
                <div className="firstName">
                    <h4>Fist Name</h4>
                        <TextField className='firstName2' id="outlined-search" label="First Name" type="text" name="firstName" value={users.firstName} onChange={handleChange}/>
                </div>

                <div className="lastName">
                    <h4>Last Name</h4>
                    <TextField className='lastName2' id="outlined-search" label="Last Name" type="mail" name="lastName" value={users.lastName} onChange={handleChange}/>
                </div>

                <div className="email">
                    <h4>Email Address</h4>
                    <TextField className='email2' id="outlined-search" label="Email" type="mail" name="email" value={users.email} onChange={handleChange}/>
                </div>

                <div className="phone">
                    <h4>No Phone</h4>
                    <TextField className='phone2' id="outlined-search" label="No Phone" type="number" name="phone" value={users.phone} onChange={handleChange}/>
                </div>

                <div className="password">
                    <h4>Password</h4>
                    <TextField
                            className='password2'
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            name="password"
                            value={users.password}
                            onChange={handleChange}
                    />
                    <Button style={{marginTop : "20px"}} className='buttonForm' type="submit" onClick={handleSubmit} variant="contained" color="primary">Submit</Button>
                </div>      
            </div>
    </div>
  )
}

export default CreateUsers