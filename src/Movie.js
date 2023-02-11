/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Card from '@mui/material/Card';
import { Typography, CardContent, CardActions, CardMedia } from '@mui/material';

function Movie({ movie, onClick }) {
  let { title, description, year, director, poster, synopsis } = movie;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} elevation='5'>
      <CardMedia component='img' alt='movie poster' src={poster} sx={{ objectFit: 'contain' }} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant='h5' component='div' textAlign='center'>
          {title}
        </Typography>
        <Typography variant='subtitle1' color='text.secondary' textAlign='center'>
          {year}
        </Typography>
        <CardActions></CardActions>
      </CardContent>
    </Card>
  );
}

export default Movie;

// DONE - added correct poster links.
// DONE - add an additional "Synopsis" field in Firebase with fuller plot synopsis, for MovieView.
