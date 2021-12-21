import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from "./products_list";
import Header from "./Header";
import HomePage from "./HomePage";
import ProductDetail from "./ProductDetail";

export default class ReactRouterExercise extends React.Component {

  render = () => {
    return (
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
    )
  }
}