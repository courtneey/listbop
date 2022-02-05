import React, { useState } from "react";
import { Typography, TextField, Box, Grid, Button } from "@mui/material";
import { authenticate } from "../store/auth";
import { connect } from "react-redux";
import { AppDispatch } from "../store";

interface LoginProps {
  login: (method: string, email: string, password: string) => void;
}

function LoginForm(props: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = props;

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
        Welcome back!
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container spacing={3} p={3}>
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
              type="password"
              sx={{ width: "100%" }}
              onChange={(evt) => setPassword(evt.target.value)}
              value={password}
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{ width: "90%", marginTop: 4, height: 50, borderRadius: 3 }}
          onClick={() => {
            login("login", email, password);
          }}
        >
          Log In
        </Button>
      </Box>
    </div>
  );
}

const mapDispatch = (dispatch: AppDispatch) => {
  return {
    login: (method: string, email: string, password: string) =>
      dispatch(authenticate(method, email, password)),
  };
};

export default connect(null, mapDispatch)(LoginForm);
