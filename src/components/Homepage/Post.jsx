import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function Post() {

    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

  return (
    <div style={{width : "100%"}}>
         <Box
        component="form"
        
        noValidate
        autoComplete="off"
        style={{display : "flex", flexDirection : "column", padding : "20px", width : "100%"}}
        >
           <TextField
          id="outlined-multiline-static"
          label="Post Anything Here"
          multiline
          rows={4}
          defaultValue="Default Value"
          style={{width : "100%"}}
        />

        <Button variant='contained' color='primary' style={{width : "25%", marginTop : "20px", justifyContent : "center"}}>Submit</Button>
        </Box>
    </div>
  )
}

export default Post;