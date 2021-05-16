import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as Scroll } from 'react-scroll'
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => {
  return {
    root: {
      background: 'none',
    },
    item: {
      display: "inline",
      color: 'white',
      margin: theme.spacing(2),
      cursor: 'pointer',
      transition: '0.3s',
      '&:hover': {
        borderBottom: '3px solid white',
        color: theme.palette.secondary,
      },
    },

  }
});

export default function Menu() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Scroll to='About' smooth='true'>
        <Typography className={classes.item} >O FIRMIE</Typography>
      </Scroll>
      <Scroll to='Waste' smooth='true'>
        <Typography className={classes.item} >ODPADY PRZEMYSŁOWE</Typography>
      </Scroll>
      <Scroll to='Consulting' smooth='true'>
        <Typography className={classes.item} >DORADZTWO</Typography>
      </Scroll>
      <Scroll to='Documents' smooth='true'>
        <Typography className={classes.item} >DECYZJE</Typography>
      </Scroll>
      <Scroll to='Contact' smooth='true'>
        <Typography className={classes.item} >KONTAKT</Typography>
      </Scroll>
    </div>
  );
}