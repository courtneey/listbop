import React from "react";
import { Typography, TextField, Button } from "@mui/material";

export default function NewListPage() {
  return (
    <div style={{ width: "30%" }}>
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontSize: 50,
          fontWeight: "bold",
          color: "#3C3C3C",
          textAlign: "left",
        }}
      >
        Build your grocery list:
      </Typography>
      <TextField
        label="Enter an item name"
        sx={{ marginTop: 4, width: "100%", textAlign: "center" }}
      ></TextField>
      <Button
        variant="contained"
        sx={{ width: "70%", marginTop: 4, height: 50, borderRadius: 3 }}
      >
        Add to List
      </Button>
    </div>
  );
}
