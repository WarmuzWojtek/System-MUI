import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menus from '../Menu/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link as Scroll } from 'react-scroll'
import { useViewport } from '../../Hook/useViewport'


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
    fontFamily: 'Play',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    borderBottom: '1px solid white',
    '@media(max-width:860px)': {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0),
    }
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  companyName: {
    fontFamily: 'Play',
  }

}));

function CompanyName() {
  const classes = useStyles();
  return (
    <Typography className={classes.companyName}>
      P.H.U. SYSTEM-EKO
    </Typography>
  )
}

export default function ButtonAppBar() {
  const classes = useStyles();
  const { width } = useViewport();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appbar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Scroll to='About' smooth='true'>
              <MenuItem onClick={handleClose}>O FIRMIE</MenuItem>
            </Scroll>
            <Scroll to='Waste' smooth='true'>
              <MenuItem onClick={handleClose}>ODPADY PRZEMYS??OWE</MenuItem>
            </Scroll>
            <Scroll to='Consulting' smooth='true'>
              <MenuItem onClick={handleClose}>DORADZTWO</MenuItem>
            </Scroll>
            <Scroll to='Documents' smooth='true'>
              <MenuItem onClick={handleClose}>DECYZJE</MenuItem>
            </Scroll>
            <Scroll to='Contact' smooth='true'>
              <MenuItem onClick={handleClose}>KONTAKT</MenuItem>
            </Scroll>
          </Menu>
          {(width < 960) ? <CompanyName /> : <Menus />}
        </Toolbar>
      </AppBar>
    </div>
  );
}




