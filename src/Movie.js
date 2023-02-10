/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Card from '@mui/material/Card';
import { Typography, CardContent, Button, CardActions, CardMedia } from '@mui/material';

function Movie({ movie, onClick }) {
  let { title, description, year, director, poster } = movie;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia component='img' alt='movie poster' src={poster} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {year}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Movie;

//   return (
//     <Card>
//       <CardContent>
//         <Typography gutterBottom variant='h5' component='div'>
//           {title}
//         </Typography>
//         <Typography variant='body2'>{year}</Typography>
//         <Button onClick={() => onClick(movie)}>More info</Button>
//       </CardContent>
//     </Card>
//   );
// }
