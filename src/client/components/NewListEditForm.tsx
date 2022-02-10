import React from "react";
import { Typography, Card, CardContent, Button } from "@mui/material";

export default function NewListEditForm() {
  return (
    <Card
      sx={{
        boxShadow:
          "0px 5px 15px rgba(0, 0, 0, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.1)",
        borderRadius: 2,
      }}
      className="newlist-edit-card"
    >
      <CardContent className="newlist-edit-container">
        <Typography
          sx={{ fontFamily: "Roboto", fontSize: 30, color: "#949494" }}
        >
          Item
        </Typography>
        <Typography
          sx={{ fontFamily: "Roboto", fontSize: 30, color: "#949494" }}
        >
          Category
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        sx={{ marginTop: 4, height: 50, borderRadius: 3 }}
        className="save-button"
      >
        Save
      </Button>
    </Card>
  );
}
