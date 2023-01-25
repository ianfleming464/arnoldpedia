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
      <Grid container style={{ paddingTop: 70 }}>
        {movies.map(movie => {
          return (
            <Grid item>
              <Movie movie={movie} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default MovieList;
