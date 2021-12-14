import React from "react";

class FavoriteColor extends React.Component {
  constructor() {
    super()
    this.state = { favoriteColor: "pink" }
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState(() => ({ favoriteColor: "red" }));
    }, 1000)
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
      </div>
    )
  }
}

export default FavoriteColor;

