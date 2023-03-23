import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { useUserName } from './hooks/useUserName';
import { styled } from '@mui/material/styles';

function Header() {
  const name = useUserName();

  return (
    <AppBar position='fixed'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <StyledIconButton edge='start' color='inherit'>
          <LogoImg src={require('./assets/image.svg').default} alt='logo' />
        </StyledIconButton>
        <HeaderTitle variant='h4' component='h1'>
          A R N O L D P E D I A
        </HeaderTitle>
        {name ? (
          <CurrentLoggedIn variant>logged in as: {name}</CurrentLoggedIn>
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
