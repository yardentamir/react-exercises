import React from "react";
import "./7.2-hide_and_seek.css"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuVisible: false
    };
  }

  menuToggler = () => {
    this.setState({ isMenuVisible: !this.state.isMenuVisible });
  };

  render() {
    console.log(this.state.isMenuVisible);
    return (
      <div>
        <button onClick={this.menuToggler}>Click Me!</button>
        <br />
        {this.state.isMenuVisible && <div className="yellow-block"></div>}
      </div>
    );
  }
}

export default App;
