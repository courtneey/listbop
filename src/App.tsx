import React from "react";
import "./App.css";
import LoginAbout from "./components/LoginAbout";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import LoginSignupPage from "./components/LoginSignupPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#44879c",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LoginSignupPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
