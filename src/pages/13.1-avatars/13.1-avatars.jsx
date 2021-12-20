import * as React from 'react';
import axios from 'axios';
import "./13.1-avatar.css";
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import InputTextComp from '../../Components/CustumeInput';

export default class Avatars extends React.Component {

  state = { avatarDetails: [], filterdArr: [] };


  componentDidMount = () => {
    axios.get('https://randomuser.me/api/', {
      params: { results: 10 }
    }).then(({ data: { results } }) => {
      console.log(results);
      for (let i = 0; i < results.length; i++) {
        const { name: { first, last }, picture: { large } } = results[i];
        this.setState((pervState) => {
          return pervState.avatarDetails.push({ name: { first, last }, large });
        });
        console.log(this.state.avatarDetails);
      }
    })
  }

  findAvatar = (userRequest) => {
    const filterdArr1 = this.state.avatarDetails.filter((person) => userRequest === person.name.first);
    this.setState((pervState) => {
      return pervState.filterdArr = filterdArr1;
    });
  }


  render() {
    return (
      <div>
        <div>
          <InputTextComp text="Search Avatar:" callback={({ target: { value } }) => this.findAvatar(value)} />
          <Button variant="contained">Contained</Button>
        </div>
        <div className="flex">
          {this.state.avatarDetails.map((person, index) => {

            return (

              <div key={uuidv4()} >
                <div key={uuidv4()}>{person.name.first} {person.name.last}</div>
                <img key={uuidv4()} src={person.large} alt={person.name.first} />
              </div>

            )
          })}
        </div>
      </div>
    )
  }
}