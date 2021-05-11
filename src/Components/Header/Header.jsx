import React, { useEffect, useState } from 'react';
import { theme } from '../../theme'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
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
    animation: 'headerBcg infinite 20s linear',
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100vw',
    height: '100vh',
    zIndex: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
      <div id='Header'>
        <Container className={classes.root}>
          <Navigation className={classes.up} />
          <Container className={classes.content}>
            <Collapse
              in={checked}
              {...(checked ? { timeout: 1500 } : {})}
            >
              <Typography variant='h1' style={{ textAlign: "center", marginBottom: 20, fontWeight: 'bold', color: 'white', fontFamily: 'Play', }}>P.H.U. SYSTEM</Typography>
              <Typography variant='h4' style={{ textAlign: "center", color: 'white', fontFamily: 'Play', }}>ZAGOSPODAROWANIE ODPADÓW PRZEMYSŁOWYCH</Typography>
              <Scroll to='About' smooth='true'>
                <Button variant='contained' color='secondary' style={{ margin: "40px 0 0 0", color: 'white' }}>Dowiedz się więcej</Button>
              </Scroll>
            </Collapse>
          </Container>
          <div className={classes.overlay}></div>
        </Container>
      </div>
    </ThemeProvider>


  );
}


export default Header;