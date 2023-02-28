import React from 'react';
import Movie from '../Movie';
import { Grid } from '@mui/material';
import { useFirebaseFetch } from '../hooks/useFirebaseFetch';

function MovieList() {
  let movies = useFirebaseFetch();
  console.log(movies);

  return (
    <>
      <Grid
        container
        style={{ paddingTop: 70 }}
        spacing={{ xs: 3, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {movies
          .sort(function (a, b) {
            return a.year - b.year;
          })
          .map(movie => {
            return (
              <Grid key={movie.id} item xs={2} sm={4} md={4}>
                <Movie
                  movie={movie}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}

export default MovieList;
