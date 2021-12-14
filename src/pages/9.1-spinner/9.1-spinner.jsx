import React from 'react';
import Spinner from './9.1-spinnerComp';
import "./9.1-spinner.css";

export default class loadingSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timer: 5, show: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ timer: this.state.timer - 1 });
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.timer >= 0) {
      setTimeout(() => {
        this.setState({ timer: this.state.timer - 1 });
        if (this.state.timer === 0) {
          this.setState({ show: false });
        }
      }, 1000);
    }
  }

  render() {
    return <div>{this.state.show && <Spinner />}</div>;
  }
}
