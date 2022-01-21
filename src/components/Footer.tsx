import React from "react";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <div className="footer-container">
      <Typography
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: 25,
        }}
      >
        Listbop
      </Typography>
      <Typography
        sx={{
          color: "white",
          width: 500,
          textAlign: "left",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero
        quis mi posuere pulvinar. Cras in sapien metus.
      </Typography>
    </div>
  );
}
