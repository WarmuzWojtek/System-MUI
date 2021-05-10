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


const Waste = () => {
  const classes = useStyles();
  const checked = useWindowPosition('About', 1.1);
  return (
    <div className={classes.bcg} id='Waste'>
      <Container className={classes.root}>
        <Slide direction="right" in={checked} {...(checked ? { timeout: 1000 } : {})} mountOnEnter unmountOnExit>
          <Typography variant='h2' className={classes.title}>ODPADY PRZEMYSŁOWE</Typography>
        </Slide>
        <Paper className={classes.paperImage} elevation='none'>
          <img src={process.env.PUBLIC_URL + '/images/radioactive.png'} alt='' className={classes.image} />
        </Paper>
        <Paper className={classes.paperImage} elevation='none'>
          <Typography variant='subtitle1' align='justify'>
            Najczęściej odbierane przez nas odpady:<br />
            - Zużyte urządzenia elektryczne i elektroniczne /monitory, komputery, świetlówki<br />
            - Chemikalia laboratoryjne<br />
            - Odpady przemysłu gumowego i tekstylnego<br />
            - Odpady i szlamy farb drukarskich /polakierniczych/<br />
            - Odpadowy toner drukarski<br />
            - Odpady zawierające azbest<br />
            - Opakowania z tworzyw sztucznych<br />
            - Zużyte czyściwa i odzież ochronną<br />
            - Zużyte opony<br />
            - Zużyte akumulatory<br />
            - Produkty spożywcze przeterminowane lub nieprzydatne do spożycia<br />
            - Wycofane leki i kosmetyki<br />
            - Tworzywa sztuczne<br />
            - Odpady z budowy, remontu i demontażu obiektów budowlanych<br />
            - Odpady ropopochodne /tj. ziemia zaolejona, smoły, osady/<br />
            - Tłuszcze i mieszaniny olejów z separacji<br />
            - i wiele innych<br />
            <br />
            Odpady przemysłowe i pozostałe:<br />
            - Świadczymy usługi przeglądu i czyszczenia separatorów<br />
            - Pracownicy naszej firmy wystawiają za klienta wymagane przy odbiorze odpadów dokumenty<br />
            - Prace związane z odbiorem, transportem i unieszkodliwianiem odpadów wykonujemy– zgodnie z obowiązującymi przepisami<br />
            - Dokładamy wszelkich starań by odbierać wszystkie rodzaje odpadów – zobacz listę odpadów<br />



          </Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default Waste;