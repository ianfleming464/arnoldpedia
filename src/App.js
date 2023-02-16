import React from 'react';
import MovieList from './MovieList';
// import MovieView from './MovieView';
import MovieContext from './movie-context';
import Header from './Header';
// import Login from './Login';
// import Register from './Register';
import { useFirebaseFetch } from './hooks/useFirebaseFetch';
import HomePage from './HomePage';

function App() {
  let movies = useFirebaseFetch();

  return (
    <MovieContext.Provider value={movies}>
      <Header />
      {/* <MovieList /> */}
      <HomePage />
    </MovieContext.Provider>
  );
}

export default App;

// TO-DO: https://reactrouter.com/en/main/start/tutorial
