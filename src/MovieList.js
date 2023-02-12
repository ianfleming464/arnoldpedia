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
        spacing={{ xs: 3, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {selectedMovie ? (
          <MovieView movie={selectedMovie} previous={movie => onMovieClick(!movie)} />
        ) : (
          movies
            .sort(function (a, b) {
              return a.year - b.year;
            })
            .map(movie => {
              return (
                <Grid key={movie.id} item xs={2} sm={4} md={4}>
                  <Movie
                    movie={movie}
                    onClick={movie => onMovieClick(movie)}
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  />
                </Grid>
              );
            })
        )}
      </Grid>
    </>
  );
}

export default MovieList;
