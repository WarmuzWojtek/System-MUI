import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link as Scroll } from 'react-scroll'


const useStyles = makeStyles({
  root: {
    background: 'none',
  },
  item: {
    color: 'white',
  }
});

export default function Menu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    > <Scroll to='About' smooth='true'>
        <BottomNavigationAction label="O FIRMIE" className={classes.item} />
      </Scroll>
      <BottomNavigationAction label="ODPADY PRZEMYSŁOWE" className={classes.item} />
      <BottomNavigationAction label="DORADZTWO" className={classes.item} />
      <BottomNavigationAction label="DECYZJE" className={classes.item} />
      <BottomNavigationAction label="KONTAKT" className={classes.item} />

    </BottomNavigation>
  );
}