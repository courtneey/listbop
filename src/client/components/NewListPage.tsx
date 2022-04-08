import React, { useState, useEffect } from "react";
import NewListSimpleForm from "./NewListSimpleForm";
import NewListEditForm from "./NewListEditForm";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

interface Item {
  id: number | string;
  name: string;
  category: string;
}

interface Props {
  krogerToken: string;
}

export default function NewListPage(props: Props) {
  const [list, setList] = useState<Item[] | []>([]);
  const [currentItemName, setCurrentItemName] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentId, setCurrentId] = useState<number | null>(null);
  const { krogerToken } = props;

  const fetchCategory = async (itemName: string) => {
    const { data } = await axios.get(`/api/products/${itemName}`, {
      headers: {
        authorization: krogerToken,
      },
    });
    setCurrentItemName(data.name);
    setCurrentCategory(data.category);
    setCurrentId(data.id);
  };

  const addToList = (item: Item) => {
    const { name } = item;
    fetchCategory(name);
  };

  useEffect(() => {
    if (currentItemName.length && currentCategory.length && currentId) {
      const newItem: Item = {
        id: currentId,
        name: currentItemName,
        category: currentCategory,
      };

      const newList = list.slice();
      newList.push(newItem);
      setList(newList);
    }
  }, [currentCategory, currentId]);

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
