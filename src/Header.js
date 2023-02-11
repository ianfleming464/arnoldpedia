import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

function Header() {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <FitnessCenterIcon />
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
