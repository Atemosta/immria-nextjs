// React Imports 
import React, { useEffect, useState } from 'react';
import Link from 'next/link'

// API Imports 
import getEnv from '../pages/api/getEnv';
import getWorlds from '../pages/api/getWorlds';

// Config Imports
import { WEBVR_INDEX, WEBVR_URL } from '../pages/config';

// Local Components Imports
import ButtonExternalURL from './ButtonExternalURL';

// MUI Imports
import Button from '@mui/material/Button';

// Color Theme Settings 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const WorldLayout = ({worldID}) => {
  const env = getEnv();
  const [loading, setLoading] = useState(null);
  const [world, setWorld] = useState(null);

  const fetchWorld = async () => {
    try {
      console.log("Fetching World...")
      let worlds = await getWorlds("private")
      for (let i = 0; i < worlds.length; i++) {
        let world = worlds[i]
        let key = world["ID"];
        if (key === worldID){
          setWorld(world);
        }
      }
      console.log("Successfully Fetched World Info!")
    } catch (error) {
      console.log("Error in World/fetchWorld)");
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchWorld();
    setLoading(false);
  // eslint-disable-next-line
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <div>
        <br/>
        <center><Link href="/"><Button variant="outlined">{"< Back to Hub"}</Button></Link></center>
        { (world) &&
        <div>
          <br/>
          <center><h1>{world.title}</h1></center>
          <br/>
          <center><ButtonExternalURL url={`${WEBVR_URL[env]}/${world.type}/${WEBVR_INDEX}?${worldID}`} text="View Names in WebVR"/></center>
          <br/>
        </div>
        }
    </div>
  </ThemeProvider>
  )
}

export default WorldLayout