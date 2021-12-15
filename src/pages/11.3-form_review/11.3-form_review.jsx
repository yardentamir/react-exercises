import React from 'react';
import InputTextComp from './Components/11.3-InputTextComp';
import SelectComp from './Components/11.3-SelectComp';
import TextareaComp from './Components/11.3-TextareaComp';
import ButtonComp from './Components/11.3-ButtonComp';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Fname: '', Lname: '', Age: '', TextArea: '', isNotSubmitted: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(name, value);
  }

  handleSubmit(event) {
    this.setState(pervState => ({ isNotSubmitted: !pervState.isNotSubmitted }));
    console.log(this.state.isNotSubmitted);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.isNotSubmitted ?
          (
            <>
              <InputTextComp name="Fname" text="First Name:" value={this.state.Fname} callback={this.handleChange} />
              <InputTextComp name="Lname" text="Last Name:" value={this.state.Lname} callback={this.handleChange} />
              <SelectComp name="Age" text="Age:" value={this.state.Age} callback={this.handleChange} />
              <TextareaComp name="TextArea" text="Some Text:" value={this.state.TextArea} callback={this.handleChange} />
              <ButtonComp />
            </>)
          :
          <div>
            <h4>your form information:</h4>
            <p>First Name: <br /> {this.state.Fname}</p>
            <p>Last Name: <br />{this.state.Lname}</p>
            <p>Age: <br />{this.state.Age}</p>
            <p>Some Text:<br />{this.state.TextArea}</p>
            <ButtonComp />
          </div>
        }
      </form>)
  }
}