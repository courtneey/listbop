import React, { useEffect } from "react";
import "./App.css";
import { LoginSignupPage } from "./client/components/LoginSignupPage";
import NewListPage from "./client/components/NewListPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { me } from "./client/store/auth";
import { RootState, AppDispatch } from "./client/store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#44879c",
    },
  },
});

interface AppProps {
  loggedIn: boolean;
  loadInitialData: () => void;
  auth: any;
}

function App(props: AppProps) {
  const { loggedIn, loadInitialData, auth } = props;

  useEffect(() => {
    loadInitialData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          {loggedIn ? (
            <Routes>
              <Route
                path="/"
                element={<NewListPage krogerToken={auth.krogerToken} />}
              />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<LoginSignupPage />} />
            </Routes>
          )}
        </Router>
      </div>
    </ThemeProvider>
  );
}

const mapState = (state: RootState) => {
  return {
    loggedIn: !!state.auth.id,
    auth: state.auth,
  };
};

const mapDispatch = (dispatch: AppDispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

export default connect(mapState, mapDispatch)(App);
