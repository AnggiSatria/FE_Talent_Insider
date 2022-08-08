import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Avatar, Stack } from '@mui/material'
import IMG from "../../Assets/Image/Anggi2.jpg"
import { useNavigate } from 'react-router-dom';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function Post() {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/create-user")
    }

    const handleClick = () => {
        navigate("/maps-page")
    }

    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [status, setStatus] = React.useState({
        desc : ""
    })

    const handleStatus = (e) => {
        setStatus({
            ...status,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(status);
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div style={{width : "100%"}}>
         <Box
        component="form"
        
        noValidate
        autoComplete="off"
        style={{display : "flex", flexDirection : "column", padding : "50px", width : "100%"}}
        >
        
        <div style={{display : "flex", width : "100%"}}>
            <Avatar src={IMG} onClick={handleNavigate}/>

            <TextField onClick={handleOpen} id="outlined-basic" label="Outlined" variant="outlined" style={{flex : "4", marginLeft : "20px"}}/>

            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          style={{width :"100%"}}
          name="desc"
          value={status.desc}
          onChange={handleStatus}
        />
            <PhotoCameraIcon style={{marginTop : "30px", marginLeft : "50%", marginRight : "50%"}}/>
            <Button type='submit' onClick={handleSubmit} variant="contained" color="primary" style={{marginLeft : "40%", marginRight : "40%", marginTop : "20px"}}>submit</Button>
        </Box>
      </Modal>
        </div>  
        
        <div className="icon" style={{display : "flex", marginTop : "40px", width : "100%", flex : "25%"}}>
            <EventAvailableIcon style={{flex : "1"}}/>
            <GpsFixedIcon onClick={handleClick} style={{flex : "1"}}/>
        </div>
    
        </Box>
    </div>
  )
}

export default Post;