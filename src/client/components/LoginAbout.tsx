import React from "react";

export default function LoginAbout() {
  return (
    <div className="about-container">
      <div className="about-title-container">
        <p className="about-title">Listbop</p>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <img src={require("../../logo.png")} className="logo-login" alt="logo" />
    </div>
  );
}
