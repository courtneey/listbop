import React from "react";
import { Typography, TextField, Button } from "@mui/material";

export default function NewListPage() {
  return (
    <div className="newlist-simple-container">
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
      <div className="newlist-lower-section">
        <TextField
          label="Enter an item name"
          sx={{ marginTop: 4, textAlign: "center" }}
          className="newlist-item-field"
        ></TextField>
        <Button
          variant="contained"
          sx={{ marginTop: 4, borderRadius: 3 }}
          className="add-to-list-button"
        >
          Add to List
        </Button>
      </div>
    </div>
  );
}
