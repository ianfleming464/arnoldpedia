import { Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

function MovieView() {
  // let { movieId } = useParams();
  const location = useLocation();
  const data = location.state;
  console.log(data);

  return (
    <>
      <Typography variant='h2' sx={{ m: 10 }}>
        Hi
      </Typography>
      <Typography variant='body1'>Movie View 2</Typography>
    </>
  );
}

export default MovieView;
