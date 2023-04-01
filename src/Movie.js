import React from 'react';
import MovieView from './MovieView';
import Card from '@mui/material/Card';
import { Typography, CardContent, CardActions, CardMedia, Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

function Movie({ movie }) {
  let { title, year, poster, id } = movie;
  // const { movieId } = useParams();

  return (
    <>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component='img'
          alt='movie poster'
          src={poster}
          sx={{ objectFit: 'contain', width: '100%', height: '150%' }}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div' textAlign='center'>
            {title}
          </Typography>

          <Typography variant='subtitle1' color='text.secondary' textAlign='center'>
            {year}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary' textAlign='center'>
            {id}
          </Typography>
          <CardActions
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <Button sx={{ mt: 3, ml: 1, textDecoration: 'none' }} variant='contained'>
              <Link
                to={`${id}`}
                state={movie}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  '&:hover': {
                    textDecoration: 'none',
                    color: 'inherit',
                  },
                }}>
                {' '}
                Learn more
              </Link>
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
