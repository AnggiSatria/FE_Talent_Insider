import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

// This key was created specifically for the demo in mui.com.
// You need to create a new one for your application.
const GOOGLE_MAPS_API_KEY = 'AIzaSyC3aviU6KHXAjoSnxcw6qbOhjnFctbxPkE';

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

function SelectLocation() {


   return (
    <Paper
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
  >
    <IconButton sx={{ p: '10px' }} aria-label="menu">
      <MenuIcon />
    </IconButton>
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search Google Maps"
      inputProps={{ 'aria-label': 'search google maps' }}
    />
    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
      <DirectionsIcon />
    </IconButton>
  </Paper>
  );
}

export default SelectLocation