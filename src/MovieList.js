import React, { useContext } from 'react';
import MovieContext from './movie-context';
import Movie from './Movie';
import { Grid } from '@mui/material';

function MovieList() {
  const movies = useContext(MovieContext);
  console.log(movies);

  // const listedMovies = movies
  //   .sort(function (a, b) {
  //     return a.year - b.year;
  //   })
  //   .map(movie => {
  //     return <Movie title={movie.title} year={movie.year} />;
  //   });

  return (
    <>
      <Grid
        container
        style={{ paddingTop: 70 }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {movies.map(movie => {
          return (
            <Grid item xs={2} sm={4} md={4}>
              <Movie movie={movie} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default MovieList;
