import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Your primary color
      light: '#1976d2', // Your light color
      dark: '#1976d2', // Your dark color
    },
    secondary: {
      main: '#dc004e', // Your secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
