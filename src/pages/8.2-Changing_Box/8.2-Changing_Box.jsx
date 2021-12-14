import React from 'react';
import './8.2-Changing_Box.css';


export default class ChangingBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 0, classes: "Box", colors: "rgb(255,255,255)" };
  }

  componentDidMount() {
    this.setState((prevState) => (prevState = { count: this.state.count + 1 }));
  }

  componentDidUpdate() {
    setTimeout(() => {
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);

      this.setState({ count: this.state.count + 1, colors: `rgb(${red},${green},${blue})` });
      if (this.state.count === 6) {
        this.setState({ classes: "Circle" });
      }
    }, 500)
  }

  render() {
    return (
      <div>
        <div className={this.state.classes} style={{ backgroundColor: this.state.colors }}></div>
      </div>
    )
  }
}