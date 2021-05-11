import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      // width: '25ch',
      width: '80%',
    },
  },
  btn: {
    width: '40%',
  },
  title: {
    '@media(max-width:860px)': {
      fontSize: '20px'
    }
  }
}));

export default function ContactForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Typography className={classes.title} variant='h4'>NAPISZ DO NAS:</Typography>
      <TextField id="name" label="Imię i Nazwisko" variant="outlined" />
      <TextField id="email" label="Twój Email" variant="outlined" />
      <TextField id="topic" label="Temat" variant="outlined" />
      <TextField id="message" label="Wiadomość" variant="outlined" multiline rows={7} />
      <Button className={classes.btn} color='primary' variant='contained'>WYŚLIJ</Button>
    </form>
  );
}