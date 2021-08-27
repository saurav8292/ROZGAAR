import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, TextField,Typography, Container }  from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


import { changePassword } from '../../actions/auth';
const UpdatePassword = ({ history }) => {
  const classes = useStyles();
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
 // const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [submit, setSubmit] = useState(false);
  const { token } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.value = "";
    console.log({newPassword, confirmNewPassword});
    changePassword(newPassword, token);
    setSubmit(true);
    setTimeout(() => {
      history.push('/');
    }, 4000);
  };
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Please Type and Confirm the new password.
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField variant="outlined" margin="normal" required fullWidth value={newPassword} onChange={(e) => setNewPassword(e.target.value)} id="newPassword" label="New Password" name="newPassword" autoComplete="email" autoFocus
          />
          <TextField variant="outlined" margin="normal" required fullWidth value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} id="confirmNewPassword" label="Confirm New Password" name="confirmNewPassword" autoComplete="email" autoFocus
          />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Submit
          </Button>
          {submit && <h3>Login Again.</h3>}
        </form>
      </div>
    </Container>
  )
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

export default UpdatePassword
