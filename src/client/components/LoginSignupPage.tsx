import React, { useState } from "react";
import LoginAbout from "./LoginAbout";
import LoginToggle from "./LoginToggle";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Card, CardContent } from "@mui/material";

export function LoginSignupPage() {
  const [selection, setSelection] = useState("login");

  return (
    <div>
      <div className="signup-container">
        <div className="signup-form">
          <Card
            className="login-card"
            sx={{
              boxShadow:
                "0px 5px 15px rgba(0, 0, 0, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.1)",
              borderRadius: 2,
            }}
          >
            <CardContent>
              <LoginToggle selection={selection} handleChange={setSelection} />
              {selection === "login" ? <LoginForm /> : <SignupForm />}
            </CardContent>
          </Card>
        </div>
        <LoginAbout />
      </div>
    </div>
  );
}
