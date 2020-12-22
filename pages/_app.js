import '../styles/globals.css'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { appWithTranslation } from '../i18n'
import App from 'next/app'

const theme = createMuiTheme({

  typography: {
    fontFamily: [
      'IRANSans'
    ].join(','),
  },

  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#f5f5f5',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#58b0bf',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#033747',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});



const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
       <Component {...pageProps} />
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)
