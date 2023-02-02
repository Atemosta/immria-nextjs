// Import React Functions
import React, { useEffect, useState } from 'react';
import Link from 'next/link'

// Import Images
import imgImmria from '../assets/monument-of-life.jpeg'
import imgDbz from '../assets/dbz.png'
import imgBook from '../assets/book.jpg'
import imgFate from '../assets/fate.jpg'
import imgNaruto from '../assets/naruto.jpg'

// API Imports
import getWorlds from '../pages/api/getWorlds';

// Local Component Imports
import WorldCard from './WorldCard';

// MUI Component Imports
import Grid from '@mui/material/Grid';

// Import Test Config
import testWorlds from './test/worlds.json'

const Hub = ({address, setLocation, setWorldKey}) => {
  // const [myNames,  setMyNames] = useState([]);
  const [myWorlds, setMyWorlds] = useState([]);
  const imgs = { 
    "fourth-great-ninja-w" : imgNaruto,
    "sao-survivors": imgImmria,
    "tournament-of-power": imgDbz,
    "holy-grail-war": imgFate,
    "my-first-book": imgBook
  }
  const [worlds, setWorlds] = useState([]);

  // Set State of Immria on Load
  useEffect(() => {
    const init = async () => {
      // Get List of Public Worlds
      try {
        let dbWorlds = await getWorlds("private")
        setWorlds(dbWorlds)
      } catch (error) {
        console.log("Error in Hub/useEffect.js (Getting Public Worlds)")
        console.error(error);
      }
      // Get List of User's Worlds
      try {
        if (address){
        // Get List of Worlds Owned by Logged in User
          for (let i = 0; i < worlds.length; i++) {
            let world = worlds[i]
            let owner = world["owner"];
            if (owner === address && !myWorlds.includes(world)){
              let temp = myWorlds;
              temp.push(worlds[i]);
              setMyWorlds(temp);
            }
          }
        }

      } catch (error) {
        console.log("Error in Hub/useEffect.js (Getting User Worlds)")
        console.error(error);
      }
    };
    init();
  }, [address, myWorlds]);

  return (
    <div>
      <center>
        <h1>🌎 Public Worlds</h1>
        <Grid container spacing={2}>
          
          {worlds.map((world) => (
            <Grid item key={world.ID} xs={12} sm={6} md={4} lg={3}>
              <Link href={`/worlds/${world.ID}`}>
                <WorldCard world={world}/>
              </Link>
            </Grid>
          ))}
        </Grid>
        {/* <h1>🌐 My Worlds</h1>
          <Grid container spacing={2}>
            {myWorlds.map((world) => (
              <Grid item key={world.ID} xs={12} sm={6} md={4} lg={3}>
                <WorldCard project={world} img={imgs[world.ID]} setLocation={setLocation} setWorldKey={setWorldKey}/>
              </Grid>
            ))}
          </Grid> */}
        {/* { myNames.length > 0 &&
          <div>
            <h1>📛 Worlds I'm Part Of</h1>
              <Grid container spacing={2}>
                {myNames.map((name) => (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <WorldCard project={name} img={imgImmria} setLocation={setLocation} setWorldKey={setWorldKey}/>
                  </Grid>
                ))}
              </Grid>
          </div>
        } */}
      </center>
    </div>
  )
}

export default Hub