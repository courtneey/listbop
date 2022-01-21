import React from "react";
import { Typography, Card, CardContent, Button } from "@mui/material";

export default function NewListEditForm() {
  return (
    <Card
      sx={{
        width: 450,
        height: 520,
        boxShadow:
          "0px 5px 15px rgba(0, 0, 0, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.1)",
        borderRadius: 2,
        padding: 4,
      }}
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
        sx={{ width: "20%", marginTop: 4, height: 50, borderRadius: 3 }}
      >
        Save
      </Button>
    </Card>
  );
}
