import React, { useEffect } from 'react';
import { Typography, Button, Grid, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

function MovieView() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const synopsis = data.synopsis.replace(/[\r\n]{2,}/g, '\n\n');

  return (
    <>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        position='relative'
        zIndex={1}
        sx={{ mt: 10 }}>
        <Box>
          <Typography variant='h3' sx={{ textAlign: 'Left', pl: 2 }}>
            {data.title}
          </Typography>
        </Box>
        <Box>
          <Button variant='contained' onClick={() => navigate(-1)} sx={{ mr: 5 }}>
            Back
          </Button>
        </Box>
      </Box>
      <Box mt={5} mx={2}>
        <Grid container spacing={2}>
          {/* Left Grid */}
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <img src={data.poster} alt={data.title} style={{ maxWidth: '100%' }} />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
          </Grid>

          {/* Right Grid */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant='subtitle1'>
                  <strong>Director:</strong> {data.director}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='subtitle1'>
                  <strong>Genre:</strong> {data.genre}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='subtitle1'>
                  <strong>Year:</strong> {data.year}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='subtitle1'>
                  <strong>Description:</strong> {data.description}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h5'>Synopsis</Typography>
                <Typography variant='subtitle1' sx={{ mt: 2 }}>
                  {synopsis}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default MovieView;
