import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import useWindowPosition from '../../Hook/useWIndowPosition';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => {
  return {
    bcg: {
      padding: 0,
      margin: 0,
      backgroundColor: "#e9e9e9",
    },
    root: {
      minHeight: "30vh",
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    title: {
      width: '100%',
      padding: theme.spacing(3),
      fontFamily: 'Play',
      borderBottom: '2px solid black',
      '@media(max-width:860px)': {
        fontSize: '24px',
      }
    },
    paperImage: {
      display: 'flex',
      alignItems: 'center',
      width: '40%',
      padding: theme.spacing(3),
      margin: theme.spacing(2),
      backgroundColor: "#e9e9e9",
      '@media(max-width:860px)': {
        width: '90%',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
      }
    },
    image: {
      width: '100%',
    }

  }
})


const Documents = () => {
  const classes = useStyles();
  const checked = useWindowPosition('About', 1.1);
  return (
    <div className={classes.bcg} id='Documents'>
      <Container className={classes.root}>
        <Slide direction="right" in={checked} {...(checked ? { timeout: 1000 } : {})} mountOnEnter unmountOnExit>
          <Typography variant='h2' className={classes.title}>DECYZJE</Typography>
        </Slide>
        <Paper className={classes.paperImage} elevation='none'>
          <img src={process.env.PUBLIC_URL + '/images/Downloading.svg'} alt='' className={classes.image} />
        </Paper>
        <Paper className={classes.paperImage} elevation='none'>
          <Typography variant='subtitle1' align='justify' component='a' href={process.env.PUBLIC_URL + '/docs/poszerzenie.pdf'}>
            Poszerzenie

          </Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default Documents;