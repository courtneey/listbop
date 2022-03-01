import React, { useState } from "react";
import NewListSimpleForm from "./NewListSimpleForm";
import NewListEditForm from "./NewListEditForm";
import Navbar from "./Navbar";
import Footer from "./Footer";

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

  const addToList = (item: Item) => {
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
