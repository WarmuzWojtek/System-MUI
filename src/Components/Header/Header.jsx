import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Navigation from '../Navigation/Navigation'
import '../../App.css'
import { Link as Scroll } from 'react-scroll'
import { Collapse } from '@material-ui/core';
import { useViewport } from '../../Hook/useViewport'


const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100%',
    maxWidth: '100%',
    backgroundSize: '100%',
    backgroundPosition: "bottom left",
    backgroundRepeat: 'no-repeat',
    margin: 0,
    padding: 0,
    position: 'relative',
    animation: 'headerBcg infinite 20s linear',
    textAlign: 'center',
    '@media(max-width:1370px)': {
      animation: 'headerBcgTablet infinite 20s linear',
    }
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
  nav: {
    zIndex: 3,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Play',
    '@media(max-width:860px)': {
      fontSize: '44px',
    },
    '@media(max-width:600px)': {
      fontSize: '36px',
    },
  },
  subTitle: {
    textAlign: "center",
    color: 'white',
    fontFamily: 'Play',
    '@media(max-width:860px)': {
      fontSize: '32px',
    },
    '@media(max-width:600px)': {
      fontSize: '30px',
    },
  },
  btn: {
    margin: "40px 0 0 0",
    color: 'white',
  }

})

const Header = () => {

  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true)
  }, []);

  const { width, height } = useViewport();

  const setSource = () => {
    if (width < 860) {
      return `url(${process.env.PUBLIC_URL + '/images/industry4.jpg'})`
    } else if (width >= 860 && height > width) {
      return `url(${process.env.PUBLIC_URL + '/images/industry6.jpg'})`
    } else return `url(${process.env.PUBLIC_URL + '/images/industry1.jpg'})`
  }

  const source = setSource();

  return (
    <div id='Header'>
      <Container className={classes.root} style={{ backgroundImage: source }}>
        <Navigation className={classes.nav} />
        <Container className={classes.content}>
          <Collapse
            in={checked}
            {...(checked ? { timeout: 1500 } : {})}
          >
            <Typography variant='h1' className={classes.title}>P.H.U. SYSTEM</Typography>
            <Typography variant='h4' className={classes.subTitle}>ZAGOSPODAROWANIE ODPADÓW PRZEMYSŁOWYCH</Typography>
            <Scroll to='About' smooth='true'>
              <Button variant='contained' color='secondary' className={classes.btn}>Dowiedz się więcej</Button>
            </Scroll>
          </Collapse>
        </Container>
        <div className={classes.overlay}></div>
      </Container>
    </div>
  );
}


export default Header;