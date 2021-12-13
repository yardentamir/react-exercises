
import React from 'react';
import "./6.1-class_based_component.css";
import faker from "faker";

function Link(props) {
  return <a className="link" href={faker.internet.url()}>{props.text}</a>
}

class Card extends React.Component {
  render() {
    return (<div className="card">
      <div className="img-mask">
        <img src={faker.image.image()} alt="" />
      </div>
      <div className="card-content">
        <h2 className="title">{faker.commerce.product()}</h2>
        <p>{faker.commerce.productDescription()}</p>
        <Link text="EXPLORE" />
        <Link text="SHARE" />
      </div>
    </div>
    )
  }
}

class Cards2 extends React.Component {
  render() {
    return <div className="flex">
      <Card />
      <Card />
    </div>
  }
}

export default Cards2;