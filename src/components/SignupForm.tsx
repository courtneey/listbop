import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LoginToggle from "./LoginToggle";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function SignupForm() {
  return (
    <div className="signup-form">
      <Card
        sx={{
          width: 450,
          height: 600,
          boxShadow:
            "0px 5px 15px rgba(0, 0, 0, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
        }}
      >
        <CardContent>
          <LoginToggle />
          <Box
            sx={{
              flexGrow: 1,
              marginTop: 2,
            }}
          >
            <Grid container spacing={3} p={3}>
              <Grid item xs={6}>
                <TextField
                  id="firstname"
                  label="First Name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField id="lastname" label="Last Name" variant="standard" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="Email"
                  variant="standard"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  label="Password"
                  variant="standard"
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
