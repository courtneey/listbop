import React from "react";
import { Typography, Card, CardContent, Button, Divider } from "@mui/material";
import axios from "axios";

interface Item {
  id: number | string;
  name: string;
  category: string;
}

interface Props {
  list: Item[];
}

export default function NewListEditForm(props: Props) {
  const { list } = props;

  const postList = async (userId: number | string) => {
    try {
      await axios.post("/api/lists/", {
        userId,
      });
    } catch (err) {
      console.log("There was an issue with posting a new list:", err);
    }
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
        <div className="newlist-edit-item">
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: 30,
              color: "#949494",
              marginBottom: 2,
            }}
          >
            Item
          </Typography>
          {list.map((item) => (
            <div key={item.id} style={{ marginBottom: 10 }}>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontSize: 20,
                  color: "#3C3C3C",
                  marginBottom: 1,
                }}
              >
                {item.name}
              </Typography>
              <Divider />
            </div>
          ))}
        </div>
        <div className="newlist-edit-category">
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: 30,
              color: "#949494",
              marginBottom: 2,
            }}
          >
            Category
          </Typography>
          {list.map((item) => (
            <div key={item.id} style={{ marginBottom: 10 }}>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontSize: 20,
                  color: "#3C3C3C",
                  marginBottom: 1,
                }}
              >
                {item.category}
              </Typography>
              <Divider />
            </div>
          ))}
        </div>
      </CardContent>
      <div>
        <Button
          variant="contained"
          sx={{ marginTop: 4, height: 50, borderRadius: 3 }}
          className="save-button"
          onClick={() => postList(1)}
        >
          Save
        </Button>
      </div>
    </Card>
  );
}
