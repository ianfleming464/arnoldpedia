import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ref, getDownloadURL, getStorage } from 'firebase/storage';
import { Typography, Box, Button, Card, CardMedia, CardContent, Grid } from '@mui/material';
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
        <Card sx={{ width: '75%', p: 2, m: 2, mt: 10 }}>
          <Box display='flex' flexDirection='row' justifyContent='space-between'>
            <CardMedia
              component='img'
              src={imageUrl}
              alt='Arnold'
              onLoad={handleImageLoad}
              sx={{
                objectFit: 'contain',
                height: '100%',
                width: '50%',
              }}
            />
            <CardContent sx={{ width: '50%', mt: 5 }}>
              <Typography variant='body1' component='p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lorem at felis
                blandit, ac sagittis elit bibendum. Vivamus ac ullamcorper purus, quis tempor magna.
                Nullam lobortis nulla vitae massa maximus, sed imperdiet mauris mollis. Proin
                vehicula feugiat arcu eget vestibulum. Fusce fringilla nisi vitae odio auctor, eget
                ullamcorper erat laoreet. In hac habitasse platea dictumst. Sed euismod mi a lacus
                dapibus, a pulvinar eros fermentum. Maecenas non metus non odio vestibulum dapibus a
                id dolor. Donec vitae nunc sit amet lectus eleifend sagittis eu eget augue.
              </Typography>
            </CardContent>
          </Box>
          <Grid container justifyContent='center' sx={{ mt: 2 }}>
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
        </Card>
      </Box>
    </>
  );
}

export default HomePage;
