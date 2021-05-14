import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import useWindowPosition from '../../Hook/useWIndowPosition';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import AttachFileSharpIcon from '@material-ui/icons/AttachFileSharp';
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
      flexWrap: 'wrap',
      alignItems: 'center',
      width: '40%',
      padding: theme.spacing(3),
      margin: theme.spacing(2),
      backgroundColor: "#e9e9e9",
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
    typo: {
      width: '90%',
      color: 'black',
      margin: '0 auto',
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    typoTitle: {
      marginBottom: theme.spacing(2),
      borderBottom: '2px solid black',
      margin: '8px auto',
    }

  }
})


const Documents = () => {
  const classes = useStyles();
  const checked = useWindowPosition('Consulting', 2.3);
  return (
    <div className={classes.bcg} id='Documents'>
      <Container className={classes.root}>
        <Slide direction="right" in={checked} {...(checked ? { timeout: 1000 } : {})} mountOnEnter unmountOnExit>
          <Typography variant='h2' className={classes.title}>DECYZJE</Typography>
        </Slide>
        <Paper className={classes.paperImage} elevation={0}>
          <img src={process.env.PUBLIC_URL + '/images/Downloading.svg'} alt='' className={classes.image} />
        </Paper>
        <Paper className={classes.paperImage} elevation={0}>
          <Typography align='center' variant='h4' className={classes.typoTitle}>Wymagane zezwolenia:</Typography>
          <Typography className={classes.typo} align='justify' component='a' href={process.env.PUBLIC_URL + '/docs/Śr.6233.28.2014.pdf'}>
            <PictureAsPdfIcon fontSize='large' className={classes.icon} />
            Zezwolenie na zbieranie odpadów Śr.6233.28.2014
          </Typography>
          <Typography className={classes.typo} align='justify' component='a' href={process.env.PUBLIC_URL + '/docs/Śr.7645-1_9_10.pdf'}>
            <PictureAsPdfIcon fontSize='large' className={classes.icon} />
          Zezwolenie na zbieranie odpadów Śr.7645-1/9/2010
          </Typography>
          <Typography className={classes.typo} align='justify' component='a' href={process.env.PUBLIC_URL + '/docs/OŚZ.III.76449-9_10.pdf'}>
            <PictureAsPdfIcon fontSize='large' className={classes.icon} />
          Zezwolenie na transport odpadów OŚZ.III.76449-9/10
          </Typography>
          <Typography className={classes.typo} align='justify' component='a' href={process.env.PUBLIC_URL + '/docs/poszerzenie.pdf'}>
            <PictureAsPdfIcon fontSize='large' className={classes.icon} />
            Poszerzenie decyzji na zbieranie odpadów
          </Typography>
          <Typography className={classes.typo} align='justify' component='a' href={process.env.PUBLIC_URL + '/docs/NR_GIOŚ.pdf'}>
            <PictureAsPdfIcon fontSize='large' className={classes.icon} />
          Zaświadczenie o wpisie do rejestru GIOŚ
          </Typography>
          <Typography className={classes.typo} align='justify' component='a' href={process.env.PUBLIC_URL + '/docs/decyzje.zip'}>
            <AttachFileSharpIcon fontSize='large' className={classes.icon} />
          Do pobrania
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default Documents;