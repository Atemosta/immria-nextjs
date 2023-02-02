import React from 'react'

// MUI Component Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const WorldCard = ({world}) => {
  return (
    <Card
    onClick={() => {
      console.log(world.ID)
    }}
    style= {{cursor: 'pointer' }}
    >
      <CardMedia
        component="img"
        height="250"
        image={world.image}  // Uses Default Images or Specific Image
        alt={world.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {world.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {world.desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default WorldCard