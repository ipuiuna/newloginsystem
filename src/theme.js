import { createMuiTheme } from '@material-ui/core/styles';

const muitheme = createMuiTheme({
  palette: {
    primary: {
      main: '#825542',
      light: '#B3826D',
      dark: '#532C1B',
      contrastText: '#FFF'
    },
    secondary: {
      main: '#F5A800',
      light: '#FFD94A',
      dark: '#BD7900'
    }
  },
  overrides: {
    MuiCard: {
      root: {
        backgroundColor: '#825542'
      }
    },
    MuiFab: {
      root: {
        backgroundColor: '#FFF'
      }
    }
  },
  typography: {
    h6: {
      fontSize: 15,
      fontWeight: 700,
      color: '#825542'
    }
  }
});

export default muitheme;
