import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logo from "../Assets/favicon.ico";

import { GoogleLogin } from "react-google-login";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { signin } from "../../actions/auth";

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
    margin: theme.spacing(1, 0, 2),
  },
  welcomeBack: {
    margin: "20px auto",
    textAlign: "center",
  },
  // gapBeweenButton: {
  //     '& .MuiButton-label': {
  //         marginBottom: "12px",
  //     }
  // },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const { setOpen1, setOpen } = props;
  const handleSubmitSignUp = () => {
    setOpen(false);
    setOpen1(true);
  };
  const handleResetPassword = () => {
    setOpen(false);
    props.setIsForgetClicked(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(signin({ email, password }, history));
    const data = await signin({ email, password }, dispatch);
    if(data?.error)
      props.setError(data.error)
    setOpen(false);
    history.push('/');
  };
  const googleSuccess = async (res) => {
    console.log(res);
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      setOpen(false);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign Failed. Try Again Later.");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h4" className={classes.welcomeBack}>
        Welcome Back
      </Typography>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={logo} alt="logoImg" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            // className={classes.borderRadiusField}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <GoogleLogin
              clientId="954976570977-d6kh972k8uk9c812bmpgqp9ublqtad4m.apps.googleusercontent.com"
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleResetPassword}
            >
              Forgot Password
            </Button>
          </Grid>
        </Grid>

        <Grid container justify="center">
          <Grid item xs={9}>
            <Button onClick={handleSubmitSignUp}>
              {"Don't have an account? Sign Up"}
            </Button>
          </Grid>
        </Grid>
        <div>
          <br />
        </div>
      </div>
    </Container>
  );
}
