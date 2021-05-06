import React from 'react';
import { theme } from '../../theme'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import mainImage from '../../eco-nature.svg'
import Navigation from '../Navigation/Navigation'
import '../../App.css'




const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100%',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/industry.jpg'})`,
    maxWidth: '100%',
    backgroundSize: 'cover',
    backgroundPosition: "bottom left",
    backgroundRepeat: 'no-repeat',
    margin: 0,
    padding: 0,


  },

})





const Header = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>

      <Container className={classes.root}>
        <Navigation />
        <Grid container>
          <Grid item xs={12} sm={6} style={{ height: '90vh', backdropFilter: 'grayscale(50%)' }} container alignItems='center' >
            <Container >
              <img src={mainImage} alt='' style={{ width: '50%' }} />
            </Container>
          </Grid>
          <Grid item xs={12} sm={6} style={{ height: '90vh' }} container alignItems='center' >
            <Container>
              <Typography variant='h2' style={{ textAlign: "left", marginBottom: 20, fontWeight: 'bold', color: 'white', fontFamily: 'Play', }}>P.H.U. SYSTEM</Typography>
              <Typography variant='h4' style={{ textAlign: "left", color: 'white', fontFamily: 'Play', }}>ZAGOSPODAROWANIE ODPADÓW PRZEMYSŁOWYCH</Typography>
              <Button variant='contained' color='primary' style={{ margin: "40px 0 0 200px", color: 'white' }}>Dowiedz się więcej</Button>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>


  );
}


export default Header;