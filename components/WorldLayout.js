// React Imports 
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
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
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// Color Theme Settings 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
        { (world) ?
        <div>
          {/* <br/>
          <center><h1>{world.title}</h1></center>
          <br/>
          <center><Link href="/"><Button variant="outlined">{"< Back to Hub"}</Button></Link></center>
          <center><ButtonExternalURL url={`${WEBVR_URL[env]}/${world.type}/${WEBVR_INDEX}?${worldID}`} text="View World in WebVR"/></center>
          <br/> */}
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <img
                src={world.image}
                alt="world preview"
              />
            </Grid>
            <Grid item xs={6} rowSpacing={1}>
              <Item>
                <h1>{world.title}</h1>
                <Link href="/"><Button variant="outlined">{"< Back to Hub"}</Button></Link>
                <ButtonExternalURL url={`${WEBVR_URL[env]}/${world.type}/${WEBVR_INDEX}?${worldID}`} text="View World in WebVR"/>
                <p>{world.desc}</p>
              </Item>
            </Grid>
          </Grid>
        </div>
        :
        <div>
          <center>
            <h1>This world is missing!</h1>
            <Link href="/"><Button variant="contained">{"< Back to Hub"}</Button></Link>
            <br/>
            <br/>
            <Image
              src="/assets/missing.jpeg"
              alt="missing world"
              width={400}
              height={600}
              priority
            />
          </center>
        </div>
        }
    </div>
  </ThemeProvider>
  )
}

export default WorldLayout