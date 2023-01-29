import React from 'react';
import Card from '@mui/material/Card';
import { Typography, CardContent, Button } from '@mui/material';

function Movie({ movie, onClick }) {
  let { title, description, year, director } = movie;
  console.table(title, description, year, director);
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2'>{year}</Typography>
        <Button onClick={() => onClick(movie)}>More info</Button>
      </CardContent>
    </Card>
  );
}

export default Movie;
