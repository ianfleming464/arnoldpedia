import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

function Header() {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <StyledIconButton edge='start' color='inherit'>
          <LogoImg src={require('./assets/image.svg').default} alt='logo' />
        </StyledIconButton>
        <HeaderTitle variant='h6' component='h1'>
          A R N O L D P E D I A
        </HeaderTitle>
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
  width: '32px',
  height: '32px',
  display: 'block',
});
