import React from 'react';
import MovieList from './MovieList';
// import MovieView from './MovieView';
import MovieContext from './movie-context';
import Header from './Header';
import { useFirebaseFetch } from './hooks/useFirebaseFetch';

function App() {
  let movies = useFirebaseFetch();
  console.log(movies[1]);

  return (
    <MovieContext.Provider value={movies}>
      <Header />
      <MovieList />
    </MovieContext.Provider>
  );
}

export default App;
