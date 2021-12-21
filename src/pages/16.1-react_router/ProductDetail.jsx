import React from 'react';
import data from "./data";

export default class ProductDetail extends React.Component {
  constructor(props) {

    console.log(props);
  }

  render = () => {
    return (
      <div>
        {"id: " + window.location.pathname.split("").pop()}
      </div>
    )
  }
}

