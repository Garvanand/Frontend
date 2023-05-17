import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Form.css";
import "./List.css";
import "./App.css";
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/items';

const getItems = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

const addItem = async (itemData) => {
  const response = await axios.post(API_BASE_URL, itemData);
  return response.data;
};

const editItem = async (itemId, updatedData) => {
  const response = await axios.put(`${API_BASE_URL}/${itemId}`, updatedData);
  return response.data;
};

const deleteItem = async (itemId) => {
  await axios.delete(`${API_BASE_URL}/${itemId}`);
};

ReactDOM.render(<App />, document.getElementById("root")); 