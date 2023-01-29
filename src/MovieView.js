import React from 'react';

function MovieView({ movie }) {
  const { title, description, year } = movie;
  if (!movie) {
    return null;
  }
  return (
    <>
      <div>{title}</div>
      <div>{description}</div>
      <div>{year}</div>
    </>
  );
}

export default MovieView;
