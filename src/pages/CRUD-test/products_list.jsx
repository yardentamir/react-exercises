import React from 'react';
import { Link } from 'react-router-dom';
import data from "./data";
import ProductDetail from "./ProductDetail";

export default class App extends React.Component {

  render = () => {
    return (
      <div>
        {data.map((product) => <span key={"span " + product.id}><Link key={product.id} to={`${product.id}`} className="item">{product.title}</Link>  * </span>)}
      </div>
    )
  }
}