import ContactForm from './ContactForm'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
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
      margin: theme.spacing(4),
      borderRadius: '20px',
      '@media(max-width:860px)': {
        width: '90%',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
      }
    },
    image: {
      width: '100%',
    },


  }
})

const Contact = () => {
  const classes = useStyles();
  return (
    <div id='Contact'>
      <Container className={classes.root}>
        <Typography variant='h2' className={classes.title}>KONTAKT</Typography>
        <Paper className={classes.paperImage} elevation={3} >
          <img src={process.env.PUBLIC_URL + '/images/Email.svg'} alt='' className={classes.image} />
        </Paper>
        <Paper className={classes.paperImage} elevation={3}>

          <ContactForm />

        </Paper>
      </Container>
    </div>
  );
}

export default Contact;