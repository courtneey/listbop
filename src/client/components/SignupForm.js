import React, { useState } from "react";
import { Typography, TextField, Box, Grid, Button } from "@mui/material";
import { authenticate } from "../store/auth";
import { connect } from "react-redux";

const SignupForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, auth } = props;

  return (
    <div>
      <Typography
        sx={{
          marginTop: 3,
          marginLeft: 3,
          textAlign: "left",
          fontFamily: "Roboto",
          fontSize: 40,
          fontWeight: "bold",
          color: "#3C3C3C",
        }}
      >
        Sign up to get started.
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container spacing={3} p={3}>
          <Grid item xs={6}>
            <TextField
              id="firstname"
              label="First Name"
              variant="standard"
              onChange={(evt) => setFirstName(evt.target.value)}
              value={firstName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="lastname"
              label="Last Name"
              variant="standard"
              onChange={(evt) => setLastName(evt.target.value)}
              value={lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="Email"
              variant="standard"
              sx={{ width: "100%" }}
              onChange={(evt) => setEmail(evt.target.value)}
              value={email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              label="Password"
              variant="standard"
              sx={{ width: "100%" }}
              onChange={(evt) => setPassword(evt.target.value)}
              value={password}
              type="password"
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{ width: "90%", marginTop: 4, height: 50, borderRadius: 3 }}
          onClick={() => {
            signup("signup", email, password, firstName, lastName);
          }}
        >
          Create Account
        </Button>
      </Box>
    </div>
  );
};

const mapState = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    signup: (method, email, password, firstName, lastName) =>
      dispatch(authenticate(method, email, password, firstName, lastName)),
  };
};

export default connect(mapState, mapDispatch)(SignupForm);
