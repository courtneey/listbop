import React, { useEffect } from "react";
import "./App.css";
import { LoginSignupPage } from "./client/components/LoginSignupPage";
import NewListPage from "./client/components/NewListPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
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
}

function App(props: AppProps) {
  const { loggedIn, loadInitialData } = props;

  useEffect(() => {
    loadInitialData();
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {loggedIn ? (
              <Route path="/" element={<NewListPage />}></Route>
            ) : (
              <Route path="/" element={<LoginSignupPage />}></Route>
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

const mapState = (state: RootState) => {
  return {
    loggedIn: !!state.auth.id,
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
