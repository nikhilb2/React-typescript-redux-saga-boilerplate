import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    htmlFontSize: 10,
    fontFamily: ['Roboto'],
    h1: {
      fontSize: '4rem',
      fontWeight: 500
    },
    button: {
      fontWeight: 500
    }
  },
  typo: {
    h1: {
      fontSize: 35,
      fontWeight: 'bold',
      fontFamily: ['Roboto']
    },
    h4: {
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: ['Roboto']
    },
    h4Reg: {
      fontSize: 25,
      fontFamily: ['Roboto']
    },
    h5: {
      fontSize: 20,
      fontFamily: ['Roboto']
    },
    caption: {
      fontSize: 15,
      fontFamily: ['Roboto']
    }
  },
  palette: {
    primary: {
      main: '#0F42FF',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#FD9408',
      contrastText: '#fff'
    },
    background: {
      paper: '#FFFFFF'
    },
    text: {
      primary: '#545871',
      secondary: '#9597A6'
    },
    action: {
      hover: '#efebe915'
    },
    border: {
      outline: '#6f5d3f',
      outlineHovered: '#ccaf7f'
    },
    error: {
      main: red.A400
    }
  },
  shape: {
    roundedInputBorderRadius: 22
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 25
      }
    }
  }
})
export default theme
