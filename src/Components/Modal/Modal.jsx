import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxHeight: '70vh',
    overflowY: 'scroll',
  },
  btn: {
    margin: '0 auto',
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={handleOpen} variant="outlined" color={props.checked ? 'primary' : 'secondary'} size='small'>
        zobacz komunikat - ochrona danych osobowych
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">KOMUNIKAT - ochrona danych osobowych</h2>
            <p id="transition-modal-description" >
              <span>Trzebina, dnia 24 maja 2018 r.</span>
              <br />
              <br />
              Szanowni Państwo,<br />
              PHU SYSTEM z siedziba Trzebina 70, 26-340 Drzewica, wpisana do centralnej ewidencji działalności gospodarczej CEDIG ("Administrator"), w związku z wejściem w życie z dniem 25 maja 2018 r. rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 roku w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) ("RODO"), niniejszym informuje, że może przetwarzać Państwa dane jako administrator danych osobowych, jeżeli zachodzi ku temu odpowiednia podstawa prawna.<br /><br />
              Administrator informuje, że:<br /><br />
              1. Państwa dane osobowe mogą być przetwarzane w celach niezbędnych do: (i) wykonania umowy, której jesteście Państwo stroną lub (ii) do podjęcia działań na Państwa żądanie przed zawarciem umowy lub (iii) wypełnienia obowiązku prawnego ciążącego na Administratorze lub (iv) w celach wynikających z prawnie uzasadnionych interesów realizowanych przez Administratora, a także (v) na podstawie Państwa zgody - w celach zgodnych z treścią udzielonej zgody;<br />
              W szczególności, jeżeli są Państwo:<br />
              1.1 Subskrybentem newslettera, którego wysyłkę organizuje Administrator (dalej: "Newsletter"), przetwarzamy Państwa dane w celach związanych z subskrypcją i wysyłką Newslettera;<br />
              1.2 Interesantem biura obsługi klienta, przetwarzamy Państwa dane w celach kontaktowania się z Państwem w sprawach, z którymi zwrócili się Państwo do biura obsługi lub w celach podjęcia działań na Państwa żądanie przed zawarciem umowy lub w celach wynikających z prawnie uzasadnionych interesów realizowanych przez Administratora.<br /><br />
              2. Podane dane mogą być przetwarzane na podstawie art. 6 ust. 1 lit. a), b), c) i lit. f) RODO;<br />
              3. Dane osobowe mogą być przechowywane przez okres niezbędny dla realizacji wskazanych powyżej celów. W przypadku przetwarzania danych za Państwa zgodą – przechowywanie danych osobowych będzie się odbywać do czasu cofnięcia zgody;
              Jeżeli przepisy prawa będą wymagały wcześniejszego usunięcia Państwa danych osobowych lub dłuższego ich przechowywania, Administrator zastosuje się do takiego obowiązku prawnego.<br />
              4. Przysługuje Państwu prawo żądania od Administratora dostępu do danych osobowych dotyczących Państwa, ich sprostowania, usunięcia lub ograniczenia przetwarzania;<br />
              5. Przysługuje Państwu prawo do cofnięcia zgody na przetwarzanie danych osobowych w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem;<br />
              6. Przysługuje Państwu prawo wniesienia skargi do GIODO (a od dnia utworzenia nowego urzędu – do Prezesa Urzędu Ochrony Danych Osobowych), gdy uznają Państwo, iż przetwarzanie dotyczących Państwu danych osobowych narusza przepisy prawa;<br />
              7. Dane osobowe zostały uzyskane od Państwa (dane osobowe pochodzą od osoby, której dane te dotyczą);<br />
              8. Podanie danych jest dobrowolne; dla szczegółowo określonych celów w odpowiednich regulaminach obowiązujących u Administratora podanie danych może być niezbędne dla dokonywania określonych transakcji lub czynności;<br />
              9. Od dnia 25 maja 2018 r. w sprawie ochrony danych u Administratora prosimy o kontakt: biuro@system-eko.eu
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}