import React from 'react';
import Card from '@mui/material/Card';
import { Typography, CardContent } from '@mui/material';

function Movie({ movie }) {
  let { title, description, year, director } = movie;
  console.table(title, description, year, director);
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2'>{year}</Typography>
        <Typography variant='body1'>{director}</Typography>
      </CardContent>
    </Card>
  );
}

export default Movie;
