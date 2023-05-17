import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import "./Form.css";
import "./List.css";



const App = () => {
  const [items, setItems] = useState([]);

  const handleDeleteItem = (item) => {
    setItems(items.filter((x) => x.id !== item.id));
  };

  const handleEditItem = (item) => {
    setItems(
      items.map((x) => {
        if (x.id === item.id) {
          return item;
        }
        return x;
      })
    );
  };

  const handleSubmitForm = (item) => {
    setItems([...items, { ...item, id: Date.now() }]);
  };

  return (
    <div>
      <h1>Web Form</h1>
      <Form onSubmit={handleSubmitForm} />
      <br />
      <List items={items} onDelete={handleDeleteItem} onEdit={handleEditItem} />
    </div>
  );
};

export default App;