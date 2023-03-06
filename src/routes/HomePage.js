import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import Login from './Login';

function HomePage() {
  const [user, setUser] = useState('');

  return (
    <>
      {/* {!user ? (
        <Navigate to='login' />
      ) : (
        <Box display='flex' flexDirection='column'>
          <Typography variant='h1' sx={{ m: 10, alignSelf: 'center' }} gutterBottom>
            HomePage
          </Typography>

          <Button variant='contained' sx={{ alignSelf: 'center' }}>
            <Link to='movies'> Arnold's Movies</Link>
          </Button>
        </Box>
      )} */}
      <Box display='flex' flexDirection='column'>
        <Typography variant='h1' sx={{ m: 10, alignSelf: 'center' }} gutterBottom>
          HomePage
        </Typography>

        <Button variant='contained' sx={{ alignSelf: 'center' }}>
          <Link to='movies'> Arnold's Movies</Link>
        </Button>
      </Box>
      ;
    </>
  );
}

export default HomePage;
