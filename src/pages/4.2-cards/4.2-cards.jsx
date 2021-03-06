
import "./4.2-cards.css";
import faker from "faker";

function Link(props) {
  return <a className="link" href={faker.internet.url()}>{props.text}</a>
}

function Card() {
  return (
    <div className="card">
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

function Cards() {
  return <div className="flex">
    <Card />
    <Card />
  </div>
}

export default Cards;