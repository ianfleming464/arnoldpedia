import React from 'react';
import Card from '@mui/material/Card';
import { Typography, CardContent, CardActions, CardMedia, Button } from '@mui/material';

function Movie({ movie }) {
  let { title, year, poster } = movie;

  return (
    <>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia component='img' alt='movie poster' src={poster} sx={{ objectFit: 'contain' }} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div' textAlign='center'>
            {title}
          </Typography>

          <Typography variant='subtitle1' color='text.secondary' textAlign='center'>
            {year}
          </Typography>
          <CardActions
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <Button sx={{ mt: 3, ml: 1 }} variant='contained'>
              Learn more
            </Button>

            <Button sx={{ mt: 3, ml: 1 }} variant='contained'>
              Add to Favourites
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
}

export default Movie;
