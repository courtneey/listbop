import React from "react";
import "./App.css";
import { LoginSignupPage } from "./client/components/LoginSignupPage";
import NewListPage from "./client/components/NewListPage";
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
        {/* <NewListPage /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
