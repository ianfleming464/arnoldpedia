import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ref, getDownloadURL, getStorage } from 'firebase/storage';
import { Typography, Box, Button, Card, CardMedia, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logout } from '../firebase';

function HomePage() {
  const [user, loading, error] = useAuthState(auth);
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/login');
  }, [user, loading]);

  useEffect(() => {
    const storage = getStorage();
    const storageRef = ref(storage, 'gs://arnoldpedia.appspot.com/arnold.jpeg');
    getDownloadURL(storageRef)
      .then(url => {
        setImageUrl(url);
      })
      .catch(error => {
        console.error('Error getting image URL:', error);
      });
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
        <Card
          sx={{
            width: '50%',
            p: 5,
            m: 5,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 1s ease',
          }}>
          <CardMedia
            component='img'
            src={imageUrl}
            alt='Arnold'
            onLoad={handleImageLoad}
            sx={{
              objectFit: 'contain',
              height: '100%',
              width: '100%',
            }}
          />
        </Card>

        <Grid container spacing={2} justifyContent='center'>
          <Grid item>
            <Button variant='contained' sx={{ m: 1 }}>
              <Link to='movies'>Arnold's Movies</Link>
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' onClick={logout} sx={{ m: 1 }}>
              Logout
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default HomePage;
