import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function LoginToggle(props: {
  selection: string;
  handleChange: (newSelection: string) => void;
}) {
  const { selection, handleChange } = props;

  return (
    <ToggleButtonGroup
      sx={{ height: 40, marginTop: 3 }}
      color="primary"
      value={selection}
      exclusive
      onChange={(event, newSelection) => {
        if (newSelection) handleChange(newSelection);
      }}
    >
      <ToggleButton value="login">Log In</ToggleButton>
      <ToggleButton value="signup">Sign Up</ToggleButton>
    </ToggleButtonGroup>
  );
}
