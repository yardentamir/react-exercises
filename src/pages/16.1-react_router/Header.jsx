import React from 'react';
import { Link } from 'react-router-dom';
export default class App extends React.Component {

  render = () => {
    return (
      <div>
        <div className="ui secondary pointing menu">
          <Link to="/" className="item">Home</Link>
          <Link to="/products" className="item">Products</Link>
        </div>
      </div>
    )
  }
}