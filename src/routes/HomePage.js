import React, { useState, useEffect } from 'react';
import { useUserObject } from '../hooks/useUserObject';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ref, getDownloadURL } from 'firebase/storage';
import { Typography, Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, logout, storage } from '../firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { Image } from 'mui-image';

function HomePage() {
  const [user, loading, error] = useAuthState(auth);
  const [imageUrl, setImageUrl] = useState('');
  // const name = useUserName();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/login');
  }, [user, loading]);

  useEffect(() => {
    const storageRef = ref(storage, 'gs://arnoldpedia.appspot.com/arnold.jpeg');
    getDownloadURL(storageRef)
      .then(url => {
        setImageUrl(url);
      })
      .catch(error => {
        console.error('Error getting image URL:', error);
      });
  }, []);

  return (
    <>
      <Box display='flex' flexDirection='column'>
        <Image
          src={imageUrl}
          fit='none'
          duration={3000}
          easing='cubic-bezier(0.7, 0, 0.6, 1)'
          showLoading={true}
          errorIcon={true}
          shift={null}
          distance='100px'
          shiftDuration={900}
          bgColor='inherit'
        />

        <Typography variant='p' sx={{ m: 10, alignSelf: 'center' }} gutterBottom>
          {/* Logged in as {name}, {user?.email} */}
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
