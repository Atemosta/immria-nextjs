// React and NextJS Imports
import React, { createContext, useContext, useMemo, useState } from 'react';
import Head from 'next/head'
// import Image from 'next/image'
// const inter = Inter({ subsets: ['latin'] })

// Component Imports
import Hub from '@/components/Hub';

// Color Theme Mode 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


// Color Theme Settings
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Immria - Create WebVR Worlds</title>
        <meta name="description" content="Create virtual reality worlds for your web browser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <main>
          <Hub/>
        </main>
    </ThemeProvider>
    </>
  )
}
