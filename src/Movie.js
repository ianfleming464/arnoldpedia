import React from 'react';

function Movie({ title, year }) {
  return (
    <div>
      <h6>{`Title: ${title} -- Year: ${year}`}</h6>
    </div>
  );
}

export default Movie;
