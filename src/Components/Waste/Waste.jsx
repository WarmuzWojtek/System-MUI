import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';

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
    },
    paperImage: {
      display: 'flex',
      alignItems: 'center',
      width: '40%',
      padding: theme.spacing(3),
      margin: theme.spacing(2),
      backgroundColor: "#e9e9e9",
    },
    image: {
      width: '100%',
    }

  }
})


const Waste = () => {
  const classes = useStyles();
  return (
    <div className={classes.bcg}>
      <Container className={classes.root}>
        <Typography variant='h2' className={classes.title}>ODPADY PRZEMYSŁOWE</Typography>
        <Paper className={classes.paperImage} elevation='none'>
          <img src={process.env.PUBLIC_URL + '/images/radioactive.png'} alt='' className={classes.image} />
        </Paper>
        <Paper className={classes.paperImage} elevation='none'>
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

export default Waste;