import React from 'react';

export default class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  componentDidMount() {
    if (this.props.focus) this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <label htmlFor="var">{this.props.text}
          <input ref={this.textInput} focus="true" type={this.props.type} id="var" onChange={this.props.callback} value={this.props.value} name={this.props.name} />
        </label>
      </div>
    )
  }

}

// export default function InputText({ callback, value, text, name }) {
//   return (
//     <div>
//       <label htmlFor="var">{text}
//         <input ref={ref} type="text" id="var" onChange={callback} value={value} name={name} />
//       </label>
//     </div>
//   )
// }