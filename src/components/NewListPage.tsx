import React from "react";
import NewListSimpleForm from "./NewListSimpleForm";
import NewListEditForm from "./NewListEditForm";

export default function NewListPage() {
  return (
    <div className="newlist-container">
      <NewListSimpleForm />
      <NewListEditForm />
    </div>
  );
}
