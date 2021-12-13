import React from "react";

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
      <div className="App">
        <button onClick={this.menuToggler}>Click Me!</button>
        <br />
        {this.state.isMenuVisible && <div>Menu</div>}
      </div>
    );
  }
}

export default App;
