import React, { useState } from 'react'

function CreateUsers() {

  const [login, setLogin] = useState({
    email: "",
    password : ""
  })

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(login);
  }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name='email' value={login.email} onChange={handleChange} placeholder='email'/>
          <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default CreateUsers