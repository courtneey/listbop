import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function SignupForm() {
  return (
    <div className="signup-form">
      <Card
        sx={{
          width: 450,
          height: 600,
          boxShadow:
            "0px 5px 15px rgba(0, 0, 0, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography>Form will go here</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
