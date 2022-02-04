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
            sx={{
              width: 450,
              height: 600,
              boxShadow:
                "0px 5px 15px rgba(0, 0, 0, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.1)",
              borderRadius: 2,
              padding: 2,
              paddingTop: 3,
              paddingBottom: 5,
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
