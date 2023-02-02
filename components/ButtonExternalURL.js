import React from 'react'
import Button from '@mui/material/Button';

const ButtonExternalURL = ({url, text}) => {
  return (
    <a style={{"text-decoration": "none"}} href={url} target="_blank" rel="noopener noreferrer"><Button variant="contained">{text}</Button></a>
  )
}

export default ButtonExternalURL