import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#938795',
    },
    background: {
      default: '#899587', // change this to the color you want
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
