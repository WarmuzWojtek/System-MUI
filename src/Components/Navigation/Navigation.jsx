import { theme } from '../../theme'
import { ThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const Navigation = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography color='primary'>bla bla bla</Typography>
    </ThemeProvider>
  );
}

export default Navigation;