import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '../Menu/Menu'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 3,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: theme.spacing(1),

  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  }

}));

function CompanyName() {
  return (
    <Typography>
      P.H.U. SYSTEM-EKO
    </Typography>
  )
}

export default function ButtonAppBar() {
  const classes = useStyles();
  const size = window.innerWidth;

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appbar} >
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          {(size < 960) ? <CompanyName /> : <Menu />}
        </Toolbar>
      </AppBar>
    </div>
  );
}




