import React from "react";
import "./App.css";
import LoginAbout from "./components/LoginAbout";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <div className="signup-container">
        <LoginForm />
        <LoginAbout />
      </div>
    </div>
  );
}

export default App;
