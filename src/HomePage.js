import { Box, Typography, Button } from '@mui/material';
import MovieList from './MovieList';
import React, { useState } from 'react';

function HomePage() {
  const [seeMovies, setSeeMovies] = useState(false);

  function viewMoviesHandler() {
    setSeeMovies(true);
  }

  return (
    <>
      <Box display='flex' flexDirection='column'>
        {!seeMovies ? (
          <Typography variant='h1' sx={{ m: 10, alignSelf: 'center' }} gutterBottom>
            Click the button, girlie boy.
          </Typography>
        ) : (
          <MovieList />
        )}
        <Button variant='contained' sx={{ alignSelf: 'center' }} onClick={viewMoviesHandler}>
          Arnold's movies
        </Button>
      </Box>
    </>
  );
}

export default HomePage;

// TO DO - change the Anold's movies button from a conditional to a ROUTE link
