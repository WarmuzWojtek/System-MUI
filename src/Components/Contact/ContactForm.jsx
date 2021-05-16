import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
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

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [topicValue, setTopicValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    const emailValidate = emailValue.includes('@');
    if (!emailValidate) return alert('Nieprawidłowy adres email!');
    const nameValidate = nameValue;
    if (!nameValidate) return alert('Przedstaw się proszę!');

    emailjs
      .sendForm(
        "service_ah9886s",
        "first",
        e.target,
        "user_yhqUECd6lLH4jc7e0SRDA"
      )
      .then(
        (result) => {
          alert("Wiadomość wysłana");
          setNameValue("");
          setEmailValue("");
          setTopicValue("");
          setMessageValue("");
        },
        (error) => {
          alert(error.text);
        }
      );
  }

  function handleNameChange(e) {
    setNameValue(e.target.value)
  }
  function handleEmailChange(e) {
    setEmailValue(e.target.value)
  }
  function handleTopicChange(e) {
    setTopicValue(e.target.value)
  }
  function handleMessageChange(e) {
    setMessageValue(e.target.value)
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={sendEmail}>
      <Typography className={classes.title} variant='h4'>NAPISZ DO NAS:</Typography>
      <TextField id="name" label="Imię i Nazwisko" variant="outlined" name="name"
        value={nameValue} onChange={handleNameChange} />
      <TextField type='email' id="email" label="Twój Email" variant="outlined" name="email"
        value={emailValue} onChange={handleEmailChange} />
      <TextField id="topic" label="Temat" variant="outlined" name="topic"
        value={topicValue} onChange={handleTopicChange} />
      <TextField id="message" label="Wiadomość" variant="outlined" multiline rows={7} name="message"
        value={messageValue} onChange={handleMessageChange} />
      <Button type='submit' className={classes.btn} color='primary' variant='contained'>WYŚLIJ</Button>
    </form>
  );
}