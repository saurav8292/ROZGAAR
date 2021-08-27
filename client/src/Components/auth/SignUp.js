import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logo from "../Assets/favicon.ico";
import { Form, FormGroup, Label, Input } from "reactstrap";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";

import { signup } from "../../actions/auth";

import validator from "validator";

export default function SignUp(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [isSignup, setIsSignup] = useState(true);
  const [isError, setIsError] = useState("");
  const [emailError, setEmailError] = useState("");

  const initialState = { name: "", email: "", password: "", confirmPassword: "", userType: false }; // false -> Jobseeker, true -> employer

  const [formData, setFormData] = useState(initialState);

  const [showPassword, setShowPassword] = useState(false);
  const [goodTogo, setGoodToGo] = useState(true);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const validateEmail = (email) => {
    if(email.length) {
      if (!validator.isEmail(email)) {
        setEmailError("Enter Valid Email !");
        setGoodToGo(false);
      } else {
        setEmailError("");
        setGoodToGo(true);
      }
    } else {
      setEmailError("");
    }
  };
  const checkPasswordValidation = (confPass) => {
    if(confPass.length) {
      if (formData.password != confPass) {
        setIsError("Confirm Password should be match with Password");
        setGoodToGo(false);
      } else {
        setIsError("");
        setGoodToGo(true);
      }
    } else {
      setIsError("");
    }
  };

  const handleSubmitSignIn = () => {
    const { setOpen, setOpen1 } = props;
    setOpen1(false);
    setOpen(true);
  };

  const handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    if(name === 'email')
      validateEmail(value);
    if(name === 'confirmPassword')
      checkPasswordValidation(value)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    if(goodTogo) {
      console.log(formData);
      dispatch(signup(formData, history));
      props.setOpen1(false);
    } else {
      console.log("Don't signup");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h4" className={classes.welcomeBack}>
        Welcome To Rozgaar
      </Typography>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={logo} alt="logoImg" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>

        <form className={classes.form} onSubmit={handleSubmitSignUp}>
          {isSignup && (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={handleChange}
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
          )}

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            // onChange={(e) => validateEmail(e)}
            onChange={handleChange}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <span style={{ color: "red" }}>{emailError}</span>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            onChange={handleChange}
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            id="password"
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            // value={confirmPassword}
            // onChange={(e) => checkPasswordValidation(e)}
            onChange={handleChange}
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirm password"
            autoComplete="current-password"
          />
          <div style={{ color: "red" }}>{isError}</div>
          <Form>
            <FormGroup check>
              <Label check className="mr-5 mt-2">
                <Input type="radio" name="radio1" onClick={() => setFormData({ ...formData, userType: false })}/>
                Job Seeker
              </Label>

              <Label check className="mr-5 mt-2">
                <Input type="radio" name="radio1" onClick={() => setFormData({ ...formData, userType: true })}/>
                Employer
              </Label>
            </FormGroup>

            </Form>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </form>
          <Grid container justify="center">
            <Grid item>
              <Button onClick={handleSubmitSignIn}>
                {"have an account? Sign In"}
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
  welcomeBack: {
    margin: "20px auto",
    textAlign: "center",
  },
}));
