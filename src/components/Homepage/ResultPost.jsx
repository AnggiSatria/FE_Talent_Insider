import { Avatar, Stack } from '@mui/material'
import React from 'react'
import IMG from "../../Assets/Image/Anggi2.jpg"

function ResultPost() {
  return (
    <div style={{display : "flex", overflow : "auto", padding : "20px"}}>
    <Stack direction="row" spacing={2}>
      <Avatar src={IMG} />
    </Stack>
    </div>
  )
}

export default ResultPost