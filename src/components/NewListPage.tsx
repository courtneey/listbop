import React from "react";
import NewListSimpleForm from "./NewListSimpleForm";
import NewListEditForm from "./NewListEditForm";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function NewListPage() {
  return (
    <div>
      <Navbar />
      <div className="newlist-container">
        <NewListSimpleForm />
        <NewListEditForm />
      </div>
      <Footer />
    </div>
  );
}
