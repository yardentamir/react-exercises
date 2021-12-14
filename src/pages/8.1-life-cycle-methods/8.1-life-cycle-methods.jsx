import React from "react";

class FavoriteColor extends React.Component {
  constructor() {
    super()
    this.state = { favoriteColor: "pink" }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState((prevState) => {
        return (prevState.favoriteColor = "red");
      });
    }, 1000);
  }

  componentDidUpdate() {
    document.getElementById("colorDiv").textContent = `The updated favorite color is ${this.state.favoriteColor}`;
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="colorDiv"></div>
      </div>
    )
  }
}

export default FavoriteColor;





