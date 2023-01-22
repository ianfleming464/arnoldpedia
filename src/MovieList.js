import React, { useContext } from 'react';
import MovieContext from './movie-context';
import Movie from './Movie';

function MovieList() {
  const movies = useContext(MovieContext);
  console.log(movies);

  const listedMovies = movies
    .sort(function (a, b) {
      return a.year - b.year;
    })
    .map(movie => {
      return <Movie title={movie.title} year={movie.year} />;
    });

  return (
    <>
      <ul>{listedMovies}</ul>
    </>
  );
}

export default MovieList;
