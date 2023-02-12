import React from 'react';
import MovieList from './MovieList';
// import MovieView from './MovieView';
import MovieContext from './movie-context';
import Header from './Header';
import Login from './Login';
import { useFirebaseFetch } from './hooks/useFirebaseFetch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  let movies = useFirebaseFetch();

  return (
    <MovieContext.Provider value={movies}>
      <Header />
      <Routes>
        <Route exact path='/' element={<MovieList />} />
      </Routes>
    </MovieContext.Provider>
  );
}

export default App;
