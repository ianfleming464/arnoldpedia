import * as React from 'react';
import { Paper } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{
        marginTop: 'calc(10% + 60px)',
        width: '100%',
        position: 'fixed',
        bottom: 0,
      }}
      component='footer'
      square
      variant='outlined'>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
        <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
        <BottomNavigationAction label='Nearby' icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
// placeholder for route testing purposes
