import { blue, red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2496EA',
      contrastText: '#fff'
    },
    secondary: {
      main: blue[500],
      contrastText: '#fff'
    },
    error: {
      main: red.A200,
      contrastText: '#fff'
    },
    background: {
      default: '#fff'
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c'
    }
  },
  shadows,
  typography
});

export default theme;
