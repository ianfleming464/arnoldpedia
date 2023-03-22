import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ref, getDownloadURL } from 'firebase/storage';
import { Typography, Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, logout, storage } from '../firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { Image } from 'mui-image';

function HomePage() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
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
          easing='
cubic-bezier(0.7, 0, 0.6, 1)'
          showLoading={true}
          errorIcon={true}
          shift={null}
          distance='
100px
'
          shiftDuration={900}
          bgColor='
inherit
'
        />

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
