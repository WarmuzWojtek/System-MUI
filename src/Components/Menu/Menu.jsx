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
    <div

      className={classes.root}
    >
      <Scroll to='About' smooth='true'>
        <Typography className={classes.item} variant='a'>O FIRMIE</Typography>
      </Scroll>
      <Scroll to='Waste' smooth='true'>
        <Typography className={classes.item} variant='a'>ODPADY PRZEMYSŁOWE</Typography>
      </Scroll>
      <Scroll to='Consulting' smooth='true'>
        <Typography className={classes.item} variant='a'>DORADZTWO</Typography>
      </Scroll>
      <Scroll to='About' smooth='true'>
        <Typography className={classes.item} variant='a'>DECYZJE</Typography>
      </Scroll>
      <Scroll to='About' smooth='true'>
        <Typography className={classes.item} variant='a'>KONTAKT</Typography>
      </Scroll>


    </div>
  );
}