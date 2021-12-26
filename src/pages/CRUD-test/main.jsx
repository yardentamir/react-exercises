import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Api from "./api";

export default class main extends Component {

  // state = { DATA: [] };

  componentDidMount = async () => {
    console.log(await Api.getItems());
  }

  addItem = async () => {
    const item = {
      avatar: "https://cdn.fakercloud.com/avatars/nehfy_128.jpg",
      createdAt: "2021-12-22T05:47:05.504Z",
      favAnimal: "rabbit",
      name: "Lee Grady",
    };
    await Api.addItem(item);
  };
  editItem = async () => {
    const item = {
      avatar: "https://cdn.fakercloud.com/avatars/kvasnic_128.jpg",
      createdAt: "2021-12-22T12:32:16.965Z",
      favAnimal: "cat",
      name: "Willie O'Kon",
    };
    await Api.editItem("/5", item);
  };

  render() {
    return (
      <div>
        <div className="container ui">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/products" exact element={<ProductList />} />
              <Route path="/products/:id" exact element={<ProductDetail />} />
            </Routes>
          </BrowserRouter>
        </div>
        <h1>Welcome to my site</h1>

        <button onClick={() => Api.deleteItem("42")}>Delete first item</button>
        <button onClick={this.addItem}>Add mock item</button>
        <button onClick={this.editItem}>Edit item</button>
        {/* <button onClick={Api.getItemById("8")}>Edit item</button> */}
      </div>
    );
  }
}