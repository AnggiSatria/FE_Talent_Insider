import IMG from "../../Assets/Image/Anggi2.jpg"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";

function ShortProfile() {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/create-user')
    }

  return (
    <div style={{display : "flex", alignItems : "center", flexDirection : "column"}}>
        <Stack className="img">
            <Avatar onClick={handleNavigate} src={IMG} alt="" style={{marginTop : "50px", width : "100px", height : "90px"}}/>
        </Stack>
        <div className="name" style={{marginTop : "20px"}}>
            <h5 style={{color : "#000"}}>Anggi Satria</h5>
        </div>
        <div className="email" style={{marginTop : "20px"}}>
            <h6>anggisatria122@gmail.com</h6>
        </div>
        <div className="phone" style={{marginTop : "20px"}}>
            <h6>0895321589992</h6>
        </div>
    </div>
  )
}

export default ShortProfile