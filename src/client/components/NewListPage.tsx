import React, { useState } from "react";
import NewListSimpleForm from "./NewListSimpleForm";
import NewListEditForm from "./NewListEditForm";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { API_ID, API_KEY, OAUTH2_BASE_URL, API_BASE_URL } from "../../secret";
import { Buffer } from "buffer";

interface Item {
  id: number;
  name: string;
  category: string;
}

export default function NewListPage() {
  const [list, setList] = useState<Item[] | []>([
    { id: 1, name: "Cookies", category: "Snacks" },
    { id: 2, name: "Bread", category: "Bakery" },
    { id: 3, name: "Milk", category: "Dairy" },
  ]);
  const encoded = Buffer.from(`${API_ID}:${API_KEY}`);
  const authorization = `Basic ${encoded.toString("base64")}`;

  const fetchCategory = async (name: string) => {
    let token = null;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", `${authorization}`);
    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    await fetch(
      "https://api-ce.kroger.com/v1/connect/oauth2/token",
      requestOptions as any
    )
      .then((response) => response.text())
      .then((result) => {
        const { access_token } = JSON.parse(result);
        token = access_token;
      })
      .catch((error) =>
        console.log("There was an issue with fetching the token:", error)
      );

    // const res = await axios.get(
    //   `https://api-ce.kroger.com/v1/products?filter.term=${name}&filter.limit=1`,
    //   {
    //     headers: {
    //       Authorization: `${authorization}`,
    //       "Content-Type": "application/json; charset=utf-8",
    //     },
    //   }
    // );
    // console.log("res:", res);
  };

  const addToList = (item: Item) => {
    fetchCategory(item.name);

    const newList = list.slice();
    newList.push(item);
    setList(newList);
  };

  return (
    <div>
      <Navbar />
      <div className="newlist-container">
        <NewListSimpleForm addToList={addToList} />
        <NewListEditForm list={list} />
      </div>
      <Footer />
    </div>
  );
}
