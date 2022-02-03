import React from "react";
import { Typography } from "@mui/material";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={require("../../logo.png")} alt="logo" style={{ width: 80 }} />
        <img
          src={require("../../text-logo.png")}
          alt="logo"
          style={{
            width: "90px",
            height: "30px",
            alignSelf: "center",
            marginLeft: 20,
          }}
        />
      </div>
      <div className="navbar-links">
        <Typography sx={{ fontFamily: "Roboto" }} color="primary.light">
          My Lists
        </Typography>
        <Typography sx={{ fontFamily: "Roboto" }} color="primary.light">
          New List
        </Typography>
        <Typography sx={{ fontFamily: "Roboto" }} color="primary.light">
          Account
        </Typography>
      </div>
    </div>
  );
}
