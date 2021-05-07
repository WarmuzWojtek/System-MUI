import React, { useEffect, useState } from 'react';
import { theme } from '../../theme'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import mainImage from '../../eco-nature.svg'
import Navigation from '../Navigation/Navigation'
import '../../App.css'
import { Link as Scroll } from 'react-scroll'
import { Collapse } from '@material-ui/core';



const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100%',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/industry1.jpg'})`,
    maxWidth: '100%',
    backgroundSize: 'cover',
    backgroundPosition: "bottom left",
    backgroundRepeat: 'no-repeat',
    margin: 0,
    padding: 0,
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  up: {
    zIndex: 3,
  }

})





const Header = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true)
  }, []);
  return (
    <ThemeProvider theme={theme}>

      <Container className={classes.root}>
        <Navigation className={classes.up} />
        <Grid container >
          <Grid item xs={12} sm={6} style={{ height: '90vh', backdropFilter: 'grayscale(50%)' }} container alignItems='center' className={classes.up}>
            <Container >
              <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
              >
                <img src={mainImage} alt='' style={{ width: '50%' }} />
              </Collapse>
            </Container>
          </Grid>
          <Grid item xs={12} sm={6} style={{ height: '90vh' }} container alignItems='center' className={classes.up}>
            <Container>
              <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
              >
                <Typography variant='h1' style={{ textAlign: "left", marginBottom: 20, fontWeight: 'bold', color: 'white', fontFamily: 'Play', }}>P.H.U. SYSTEM</Typography>
                <Typography variant='h4' style={{ textAlign: "left", color: 'white', fontFamily: 'Play', }}>ZAGOSPODAROWANIE ODPADÓW PRZEMYSŁOWYCH</Typography>
                <Scroll to='About' smooth='true'>
                  <Button variant='contained' color='primary' style={{ margin: "40px 0 0 200px", color: 'white' }}>Dowiedz się więcej</Button>
                </Scroll>
              </Collapse>
            </Container>
          </Grid>
        </Grid>
        <div className={classes.overlay}></div>
      </Container>
    </ThemeProvider>


  );
}


export default Header;