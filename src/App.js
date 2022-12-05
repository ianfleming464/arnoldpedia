import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from './firebase';

function App() {
  const [movies, setMovies] = useState([]);
  const colRef = collection(db, 'movies'); // connecting to database

  const getMovies = async () => {
    // function grabs the movies and stores them in state
    const data = await getDocs(colRef);
    setMovies(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getMovies();
    console.table(movies);
  }, []);

  return (
    <div className='App'>
      <ul>
        {movies
          .sort(function (a, b) {
            return a.year - b.year;
          })
          .map(movie => {
            return <li key={movie.id}>{`${movie.title} : ${movie.description}`}</li>;
          })}
      </ul>
    </div>
  );
}

export default App;

// TO DO;
// Backend is finished
// sort() arranges movies by year. Time to look at displaying. So hierarchy: App->MoviesView (a large responsive card/container)->MovieCard (individual smaller cards, displaying the movies title, poster, shortened description) -> MovieView (click into it, individual movie screen with all the info)
