import React from 'react';
import "./14.2-text_copy.css";
import CostumeInput from '../../Components/CostumeInputNoLabel';
import CostumeButton from '../../Components/CostumeButton';

export default class TextCopy extends React.Component {

  constructor() {
    super();
    this.state = { userInput: "" };
  }

  handelClick = (event) => {
    event.preventDefault();
    return navigator.clipboard.writeText(this.state.userInput);
  }

  handelChange = ({ target: { value } }) => {
    this.setState((pervState) => {
      return { ...pervState, userInput: value };
    });
  }

  render() {
    return (
      <div className="center">
        <div className="ui card">
          <h2>What is the meaning of life?</h2>
          <CostumeInput type="text" callback={this.handelChange} />
          <CostumeButton type="submit" text="Copy" callback={(event) => this.handelClick(event)} />
        </div>
      </div>
    )
  }
}