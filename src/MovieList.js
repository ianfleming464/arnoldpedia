import React, { useContext } from 'react';
import MovieContext from './movie-context';
import Movie from './Movie';

function MovieList() {
  const movies = useContext(MovieContext);
  console.log(movies);
  return (
    <>
      <Movie />
    </>
  );
}

export default MovieList;

// <ul>
//   {movies
//     .sort(function (a, b) {
//       return a.year - b.year;
//     })
//     .map(movie => {
//       return <li>{`${movie.title} : ${movie.description}`}</li>;
//     })}
// </ul>;
