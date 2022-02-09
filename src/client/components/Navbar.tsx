import React from "react";
import { Link } from "@mui/material";
import { logout } from "../store";
import { connect } from "react-redux";
import { AppDispatch } from "../store";

interface NavbarProps {
  logout: () => void;
}

function Navbar(props: NavbarProps) {
  const { logout } = props;

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={require("../../logo.png")} alt="logo" style={{ width: 80 }} />
        <img
          src={require("../../text-logo.png")}
          alt="logo"
          className="navbar-text-logo"
        />
      </div>
      <div className="navbar-links">
        <Link
          sx={{ fontFamily: "Roboto" }}
          underline="none"
          component="button"
          color="primary.light"
        >
          My Lists
        </Link>
        <Link
          sx={{ fontFamily: "Roboto" }}
          underline="none"
          component="button"
          color="primary.light"
        >
          New List
        </Link>
        <Link
          sx={{ fontFamily: "Roboto" }}
          underline="none"
          component="button"
          color="primary.light"
        >
          Account
        </Link>
        <Link
          sx={{ fontFamily: "Roboto" }}
          color="primary.light"
          underline="none"
          component="button"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </Link>
      </div>
    </div>
  );
}

const mapDispatch = (dispatch: AppDispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(null, mapDispatch)(Navbar);
