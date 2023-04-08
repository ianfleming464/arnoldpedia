import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#938795',
    },
    background: {
      default: '#abdbe3', // change this to the color you want
    },
  },
  typography: {
    fontFamily: 'Calibri',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

// TO DO: 04.04
// In Firebase, shorten the synopsis and add an in-film Arnold action photo for EACH movie. Then,
// in the MovieView, we could have it as a background to contrast the poster in the foreground.
// Check the colour scheme! Because it's pretty shite atm.
// Homepage ideas?? A brief Arnold bio and links to his new pod, books, website etc. Perhaps an
// image caraousel of the big man.
