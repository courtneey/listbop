import React from "react";
import "./App.css";
import LoginAbout from "./components/LoginAbout";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div className="App">
      <div className="signup-container">
        <SignupForm />
        <LoginAbout />
      </div>
    </div>
  );
}

export default App;
