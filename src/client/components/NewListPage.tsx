import React, { useState } from "react";
import NewListSimpleForm from "./NewListSimpleForm";
import NewListEditForm from "./NewListEditForm";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { API_BASE_URL } from "../../secret";

interface Item {
  id: number;
  name: string;
  category: string;
}

interface Props {
  krogerToken: string;
}

export default function NewListPage(props: Props) {
  const [list, setList] = useState<Item[] | []>([
    { id: 1, name: "Cookies", category: "Snacks" },
    { id: 2, name: "Bread", category: "Bakery" },
    { id: 3, name: "Milk", category: "Dairy" },
  ]);
  const { krogerToken: token } = props;

  const fetchCategory = async (name: string) => {
    const { data } = await axios.get(`${API_BASE_URL}/v1/products`, {
      params: {
        "filter.term": `${name.toLowerCase()}`,
        "filter.limit": 1,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "Cache-Control": "no-cache",
      },
    });
    const productInfo = data.data[0];
    const category = productInfo.categories[0];
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
