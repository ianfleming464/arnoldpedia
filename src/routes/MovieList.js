import React, { useState, useEffect } from 'react';
import db from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Movie from '../Movie';
import { Grid } from '@mui/material';

function MovieList() {
  const [movies, setMovies] = useState([]);

  const colRef = collection(db, 'movies');

  useEffect(() => {
    const getMovies = async () => {
      const data = await getDocs(colRef);
      setMovies(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
