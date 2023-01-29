import React, { useContext, useState } from 'react';
import MovieContext from './movie-context';
import Movie from './Movie';
import { Grid } from '@mui/material';
import MovieView from './MovieView';

function MovieList() {
  const movies = useContext(MovieContext);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const onMovieClick = movie => setSelectedMovie(movie);

  return (
    <>
      <Grid
        container
        style={{ paddingTop: 70 }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {selectedMovie ? (
          <MovieView movie={selectedMovie} />
        ) : (
          movies.map(movie => {
            return (
              <Grid item xs={2} sm={4} md={4}>
                <Movie key={movie.id} movie={movie} onClick={movie => onMovieClick(movie)} />
              </Grid>
            );
          })
        )}
      </Grid>
    </>
  );
}

export default MovieList;
