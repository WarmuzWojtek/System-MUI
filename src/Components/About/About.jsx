import { Typography } from '@material-ui/core';
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
    },
    paperImage: {
      width: '40%',
      padding: theme.spacing(3),
      margin: theme.spacing(2),
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


const About = () => {
  const classes = useStyles();
  return (
    <div id='About'>
      <Container className={classes.root}>
        <Typography variant='h2' className={classes.title}>O FIRMIE</Typography>
        <Paper className={classes.paperImage} elevation='none'>
          <img src={process.env.PUBLIC_URL + '/images/team.png'} alt='' className={classes.image} />
        </Paper>
        <Paper className={classes.paperImage} elevation='none'>
          <Typography variant='subtitle1' align='justify' >


            P.H.U System świadczy usługi w zakresie gospodarowania odpadami niebezpiecznymi i innymi niż niebezpieczne.

            Obsługujemy przedsiębiorstwa w obszarze ochrony środowiska zajmując się odbiorem, transportem i ponownym wykorzystaniem odpadów przemysłowych z terenu całego kraju. Zapewniamy szybki i terminowy odbiór odpadów od wytwórcy specjalistycznym transportem (spełniającym przepisy ADR).

            Gwarantujemy naszym klientom profesjonalną obsługę, zgodną z obowiązującym prawem. Doświadczenie kadry pracującej w naszej firmie, szybka i profesjonalna obsługa, atrakcyjne warunki współpracy sprawiły, że zaufało nam wielu klientów.

            Zapraszamy do współpracy.

        </Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default About;