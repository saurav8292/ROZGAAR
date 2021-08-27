import React, { useState } from "react";
import { Avatar, Button, TextField, Typography, Container }  from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../Assets/favicon.ico";

//import { useHistory } from "react-router-dom";

import { resetPassword } from '../../actions/auth';

export default function ResetPassword(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);
  //const history = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    resetPassword(email);
    setSubmit(true);
    setTimeout(() => {
      props.setIsForgetClicked(false);
    }, 4000);
  };
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={logo} alt="logoImg" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Enter the email associated with your account.
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField variant="outlined" margin="normal" required fullWidth value={email} onChange={(e) => setEmail(e.target.value)} id="email" label="Email Address" name="email" autoComplete="email" autoFocus
          />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Submit
          </Button>
          {submit && <p>Kindly check your email for password reset Link.</p>}
        </form>
      </div>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));