import React from "react";
import LoginToggle from "./LoginToggle";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  Grid,
  Button,
} from "@mui/material";

export default function LoginForm() {
  return (
    <div className="signup-form">
      <Card
        sx={{
          width: 450,
          height: 600,
          boxShadow:
            "0px 5px 15px rgba(0, 0, 0, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
          padding: 2,
          paddingTop: 3,
          paddingBottom: 5,
        }}
      >
        <CardContent>
          <LoginToggle />
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
          <Box>
            <Button
              variant="contained"
              sx={{ width: "90%", marginTop: 4, height: 50, borderRadius: 3 }}
            >
              Log In
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
