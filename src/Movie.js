/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Card from '@mui/material/Card';
import { Typography, CardContent, Button, CardActions, CardMedia } from '@mui/material';

function Movie({ movie, onClick }) {
  let { title, description, year, director, poster } = movie;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} elevation='5'>
      <CardMedia component='img' alt='movie poster' src={poster} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {year}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Movie;

// DONE - added correct poster links.
// TO DO - add an additional "Synopsis" field in Firebase with fuller plot synopsis, for MovieView.
