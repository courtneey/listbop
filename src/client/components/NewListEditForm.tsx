import React, { useState } from "react";
import { Typography, Card, CardContent, Button } from "@mui/material";

interface Item {
  id: number;
  name: string;
  category: string;
}

export default function NewListEditForm() {
  const [list, setList] = useState<Item[] | []>([
    { id: 1, name: "Cookies", category: "Snacks" },
  ]);

  const addToList = (item: Item) => {
    const newList = list.slice();
    newList.push(item);
    setList(newList);
  };

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
        <div className="newlist-edit-title">
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
        </div>

        {list.map((item: Item) => (
          <div key={item.id} className="newlist-edit-title">
            <Typography>{item.name}</Typography>
            <Typography>{item.category}</Typography>
          </div>
        ))}
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
