import React, { useState, useEffect } from "react";
import NewListSimpleForm from "./NewListSimpleForm";
import NewListEditForm from "./NewListEditForm";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { API_BASE_URL } from "../../secret";

interface Item {
  id: number | string;
  name: string;
  category: string;
}

interface Props {
  krogerToken: string;
}

export default function NewListPage(props: Props) {
  const [list, setList] = useState<Item[] | []>([
    { id: 1, name: "Bread", category: "Bakery" },
    { id: 2, name: "Milk", category: "Dairy" },
  ]);
  const [currentItemName, setCurrentItemName] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentId, setCurrentId] = useState("");
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
    const { productId } = productInfo;

    setCurrentCategory(category);
    setCurrentId(productId);
  };

  const addToList = (item: Item) => {
    const { name } = item;
    const titleName = `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`;

    setCurrentItemName(titleName);
    fetchCategory(name);
  };

  useEffect(() => {
    if (currentItemName.length && currentCategory.length) {
      const newItem: Item = {
        id: currentId,
        name: currentItemName,
        category: currentCategory,
      };

      const newList = list.slice();
      newList.push(newItem);
      setList(newList);
    }
  }, [currentCategory]);

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
