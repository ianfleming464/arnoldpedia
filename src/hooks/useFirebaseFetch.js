import { useState, useEffect } from 'react';
import db from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export const useFirebaseFetch = () => {
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

  return movies;
};
