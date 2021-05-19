import ContactForm from './ContactForm'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import useWindowPosition from '../../Hook/useWIndowPosition';
import Slide from '@material-ui/core/Slide';

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
      width: '40%',
      padding: theme.spacing(3),
      '@media(max-width:860px)': {
        width: '90%',
        padding: theme.spacing(1),
        margin: '8px auto',
      }
    },
    paperImageText: {
      width: '40%',
      padding: theme.spacing(3),
      '@media(max-width:860px)': {
        width: '90%',
        padding: theme.spacing(1),
        margin: '8px auto',
      }
    },
    image: {
      display: 'block',
      margin: '0 auto',
      width: '100%',
      '@media(max-width:860px)': {
        width: '60%',
      },
      '@media(max-width:600px)': {
        width: '100%',
      }
    },
    contactContent: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '@media(max-width:860px)': {
        fontSize: 20,
      }
    },
    contactTitle: {
      textAlign: 'center',
      marginBottom: theme.spacing(3),
      '@media(max-width:860px)': {
        fontSize: 24,
      }
    },
    phone: {
      marginRight: theme.spacing(2),
    },
  }
})

const Contact = () => {
  const classes = useStyles();
  const checked = useWindowPosition('Documents', 4.5);
  return (
    <div id='Contact'>
      <Container className={classes.root}>
        <Slide direction="left" in={checked} {...(checked ? { timeout: 1000 } : {})} mountOnEnter unmountOnExit>
          < Typography variant='h2' className={classes.title} align='center'>KONTAKT</Typography>
        </Slide>
        <Paper className={classes.paperImageText} elevation={0} >
          <Typography className={classes.contactTitle} variant='h4'>Dane kontaktowe:</Typography>
          <Typography className={classes.contactContent} variant='h6'>P.H.U SYSTEM</Typography>
          <Typography className={classes.contactContent} variant='h6'>Sławomir Kośka</Typography>
          <Typography className={classes.contactContent} variant='h6'>Trzebina 70</Typography>
          <Typography className={classes.contactContent} variant='h6'>26-340 Drzewica</Typography>
          <Typography className={classes.contactContent} variant='h6'>
            <PhoneIcon className={classes.phone} />
            +48 604 383 868</Typography>
          <Typography className={classes.contactContent} variant='h6' component='a' href="mailto:biuro@system-eko.eu">
            <MailOutlineIcon className={classes.phone} />
            biuro@system-eko.eu</Typography>
          <img src={process.env.PUBLIC_URL + '/images/Email.svg'} alt='' className={classes.image} />
        </Paper>
        <Paper className={classes.paperImage} elevation={0}>
          <ContactForm />
        </Paper>
      </Container>
    </div>
  );
}

export default Contact;