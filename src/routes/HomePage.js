import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Typography, Box, Button } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { auth, db, logout } from '../firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import Login from './Login';

function HomePage() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/login');
    fetchUserName();
  }, [user, loading]);

  return (
    <>
      <Box display='flex' flexDirection='column'>
        <Typography variant='h1' sx={{ m: 10, alignSelf: 'center' }} gutterBottom>
          HomePage
        </Typography>
        <Typography variant='p' sx={{ m: 10, alignSelf: 'center' }} gutterBottom>
          Logged in as {name}, {user?.email}
        </Typography>
        <Button variant='contained' sx={{ alignSelf: 'center' }}>
          <Link to='movies'> Arnold's Movies</Link>
        </Button>
        <Button variant='contained' sx={{ alignSelf: 'center' }} onClick={logout}>
          Logout
        </Button>
      </Box>
      )}
    </>
  );
}

export default HomePage;
