import { Button, Typography } from '@mui/material';
import React from 'react';

function MovieView({ movie, previous }) {
  const { title, synopsis, id } = movie;

  if (!movie) {
    return null;
  }
  return (
    <>
      <Typography variant='h2'>{title}</Typography>
      <Button sx={{ mt: 3, ml: 1 }} onClick={() => previous(movie)} variant='contained'>
        Back
      </Button>
      <Typography variant='body1'>{synopsis}</Typography>
    </>
  );
}

export default MovieView;
