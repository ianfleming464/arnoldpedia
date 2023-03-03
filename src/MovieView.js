import { Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function MovieView() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  console.log(data);

  return (
    <>
      <Box display='flex' flexDirection='column'>
        <Typography variant='h2' sx={{ alignSelf: 'center', mt: 10 }}>
          {data.title}
        </Typography>
        <Button variant='contained' sx={{ alignSelf: 'center', m: 2 }} onClick={() => navigate(-1)}>
          Back
        </Button>
        <Typography variant='body1'>{data.synopsis}</Typography>
      </Box>
    </>
  );
}

export default MovieView;
