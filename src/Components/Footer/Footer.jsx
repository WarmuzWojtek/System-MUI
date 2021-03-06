import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: '#e9e9e9',
      height: '8vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    typo: {
      marginLeft: '5vw',
    }
  }
})

const Footer = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typo}>&copy; Rudeboy Design 2021</Typography>
    </div>
  );
}

export default Footer;