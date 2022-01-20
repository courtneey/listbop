import React from "react";

export default function LoginAbout() {
  return (
    <div className="about-container">
      <p className="about-title">Listbop</p>
      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <img src={require("../logo.png")} className="logo-login" alt="logo" />
    </div>
  );
}
