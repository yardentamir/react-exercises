import React from 'react';
import CheckBoxComp from "./11.1-checkboxComp";

const checkboxes = [
  { id: 0, isChecked: false, text: 'I read the term of the app' },
  { id: 1, isChecked: false, text: 'I accept the term of the app' },
  { id: 2, isChecked: true, text: 'I want to get the weekly news letter' },
  { id: 3, isChecked: true, text: 'I want to get sales and offers' },
];

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCheckedState: props.checked };
  }

  updateChecked = (isChecked) => {
    console.log(isChecked);
    this.setState({ isCheckedState: isChecked });
  };

  render() {
    return (
      <div>
        {checkboxes.map(checkbox => {
          return <CheckBoxComp
            id={checkbox.id}
            key={checkbox.id}
            text={checkbox.text}
            callBack={this.updateChecked}
            checked={checkbox.isChecked} />
        })}
      </div>
    )
  }
}