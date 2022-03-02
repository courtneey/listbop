import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";

interface Item {
  id: number | string;
  name: string;
  category: string;
}

interface Props {
  addToList: (item: Item) => void;
}

export default function NewListPage(props: Props) {
  const { addToList } = props;
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");

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
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          sx={{ marginTop: 4, textAlign: "center" }}
          className="newlist-item-field"
        ></TextField>
        <Button
          variant="contained"
          sx={{ marginTop: 4, borderRadius: 3 }}
          className="add-to-list-button"
          onClick={() => {
            addToList({ id: 4, name: itemName, category: "None" });
            setItemName("");
          }}
        >
          Add to List
        </Button>
      </div>
    </div>
  );
}
