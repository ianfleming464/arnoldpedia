import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Box display='flex' flexDirection='column'>
        <Typography variant='h1' sx={{ m: 10, alignSelf: 'center' }} gutterBottom>
          HomePage
        </Typography>

        <Button variant='contained' sx={{ alignSelf: 'center' }}>
          <Link to='movies'> Arnold's Movies</Link>
        </Button>
      </Box>
    </>
  );
}

export default HomePage;
