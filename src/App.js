import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from './firebase';
import MovieList from './MovieList';
import MovieContext from './movie-context';
import Header from './Header';

function App() {
  const [movies, setMovies] = useState([]);
  const colRef = collection(db, 'movies'); // connecting to database

  useEffect(() => {
    const getMovies = async () => {
      const data = await getDocs(colRef);
      setMovies(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MovieContext.Provider value={movies}>
      <Header />
      <MovieList />
    </MovieContext.Provider>
  );
}

export default App;

// TO DO;
// Backend is finished
// sort() arranges movies by year. Time to look at displaying. So hierarchy: App->MoviesView (a large responsive card/container)->MovieCard (individual smaller cards, displaying the movies title, poster, shortened description) -> MovieView (click into it, individual movie screen with all the info)
