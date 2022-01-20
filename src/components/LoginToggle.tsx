import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function LoginToggle() {
  const [selection, setSelection] = useState("login");

  function handleChange(
    event: React.MouseEvent<HTMLElement>,
    newSelection: string
  ) {
    setSelection(newSelection);
  }

  return (
    <ToggleButtonGroup
      sx={{ height: 40, marginTop: 3 }}
      color="primary"
      value={selection}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="login">Log In</ToggleButton>
      <ToggleButton value="signup">Sign Up</ToggleButton>
    </ToggleButtonGroup>
  );
}
