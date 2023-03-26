import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { useUserObject } from './hooks/useUserObject';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';

function Header() {
  const currentUser = useUserObject();
  console.log(currentUser);

  return (
    <AppBar position='fixed'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <StyledIconButton edge='start' color='inherit'>
          <LogoImg src={require('./assets/image.svg').default} alt='logo' />
        </StyledIconButton>
        <HeaderTitle variant='h4' component='h1'>
          A R N O L D P E D I A
        </HeaderTitle>
        {currentUser.name ? (
          <CurrentLoggedIn>
            logged in as: {currentUser.name ? currentUser.name : null}
          </CurrentLoggedIn>
        ) : (
          <div sx={{ flexGrow: '1' }} />
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;

const HeaderTitle = styled(Typography)({
  marginLeft: 16,
});

const StyledIconButton = styled(IconButton)({
  padding: 8,
  '& .MuiSvgIcon-root': {
    width: '32px',
    height: '32px',
  },
});

const LogoImg = styled('img')({
  width: '40px',
  height: '40px',
  display: 'block',
});

const CurrentLoggedIn = styled(Typography)({
  marginRight: 16,
});
