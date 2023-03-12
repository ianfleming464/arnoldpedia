/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Link,
  Box,
  Typography,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword, signInWithGoogle } from '../firebase';

// const handleSubmit = event => {
//   event.preventDefault();
//   const data = new FormData(event.currentTarget);
//   console.log({
//     user: data.get('user'),
//     email: data.get('email'),
//     password: data.get('password'),
//   });
// };

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert('Please enter name');
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/movies');
  }, [user, loading]);

  return (
    <>
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{ m: 1 }}></Avatar>
          <Typography component='h1' variant='h5'>
            Register
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='name'
              label='Name'
              value={name}
              onChange={e => setName(e.target.value)}
              autoComplete='name'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete='email'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              value={password}
              onChange={e => setPassword(e.target.value)}
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              onClick={register}
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 1 }}>
              Register
            </Button>
            <Button
              onClick={signInWithGoogle}
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 1, mb: 1 }}>
              Register with Google
            </Button>
            <Grid container>
              <Grid item>
                <Link href='login'>Already have an account? Login here</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Register;

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignIn() {
