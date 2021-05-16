import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
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
      display: 'flex',
      alignItems: 'center',
      width: '40%',
      padding: theme.spacing(3),
      margin: theme.spacing(2),
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

  }
})

const Consultant = () => {
  const classes = useStyles();
  const checked = useWindowPosition('Waste', 1.5);
  return (
    <div id='Consulting'>
      <Container className={classes.root}>
        <Slide direction="left" in={checked} {...(checked ? { timeout: 1000 } : {})} mountOnEnter unmountOnExit>
          <Typography variant='h2' className={classes.title}>DORADZTWO</Typography>
        </Slide>
        <Paper className={classes.paperImage} elevation={0}>
          <img src={process.env.PUBLIC_URL + '/images/consultant.jpg'} alt='' className={classes.image} />
        </Paper>
        <Paper className={classes.paperImage} elevation={0}>
          <Typography variant='subtitle1' align='justify'>
            Oferujemy profesjonalne doradztwo w zakresie obrotu i przewozu towarów niebezpiecznych ADR.
            Zgodnie z Ustawą o Przewozie Drogowym Towarów Niebezpiecznych z dn. 28 września 2002 roku każdy przedsiębiorca ma obowiązek wyznaczyć uprawnionego doradcę ds bezpieczeństwa przewozu towarów niebezpiecznych ( art. 21 Ustawy j/w ). Doradca powinien posiadać państwowe uprawnienia wydane przez odpowiedni Wojewódzki Inspektorat Transportu Drogowego.
            Obowiązek wyznaczenia doradcy dotyczy wszystkich przedsiębiorców wykonujących, co najmniej jedną z czynności wymienionych w Ustawie tzn:
            - załadunek,
            - rozładunek,
            - transport towarów niebezpiecznych.
            W zakresie naszej obsługi wykonujemy:
            - procedury pakowania, przechowywania, załadunku, transportu i rozładunku towarów niebezpiecznych,
            - dokumentację przewozową tj.: instrukcje bezpieczeństwa dla załogi jednostek transportowych przewożących towary ADR, dokumenty przewozowe,
            - szkolenie załogi pojazdów oraz osób personelu biorących udział w operacjach z udziałem towarów niebezpiecznych.
            Świadczymy usługowy przewóz towarów niebezpiecznych. Na życzenie klienta oferujemy doradztwo w klasyfikacji towaru niebezpiecznego do odpowiednich numerów UN substancji oraz odpowiednich warunków pakowania i przewozu towarów niebezpiecznych.
            Konsultacje z zakresu przepisów ochrony środowiska:
            - ustawy z dnia 27 kwietnia 2001 r. Prawo ochrony środowiska (t.j. Dz. U. z 2008 r., Nr 25, poz. 150 z póżn. zm.)
            - ustawy z dnia 27 kwietnia 2001 r. o odpadach (t.j. Dz. U. z 2007 r., Nr 39, poz. 251 z późn. zm.)
            - ustawy z dnia 29 lipca 2005 r. o zużytym sprzęcie elektrycznym i elektronicznym (Dz. U. z 2005 r., Nr 180, poz. 1495 z późn. zm.)
            Sporządzanie dokumentacji:
            - wnioski o wydanie pozwolenia na wytwarzanie odpadów.
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default Consultant;