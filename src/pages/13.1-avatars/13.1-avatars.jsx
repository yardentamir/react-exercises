import React from 'react';
import axios from 'axios';
import "./13.1-avatar.css";
import InputTextComp from '../../Components/11.3-InputTextComp';

export default class Avatars extends React.Component {

  state = { avatarDetails: [], filterdArr: [], arrNamesFilterd: [], count: 0 };


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
    filterdArr1.forEach((person) => {
      this.setState((pervState) => {
        return pervState.arrNamesFilterd.push(person.name.first);
      });
    })
    console.log(this.state.arrNamesFilterd)

    this.setState((pervState) => {
      return pervState.filterdArr = filterdArr1;
    });
    console.log(this.state.filterdArr[0] && this.state.filterdArr[0].name.first)
  }


  render() {
    return (
      <div>
        <div>
          <InputTextComp text="Search Avatar:" callback={({ target: { value } }) => this.findAvatar(value)} />
        </div>

        <div className="flex">
          {this.state.avatarDetails.map((person, index) => {

            return (

              <div key={"div" + index} className={`${this.state.arrNamesFilterd[index].name.first === person.name.first ? "display-block" : "display-none"}`}>
                <div key={person.name.first + person.name.last + index}>{person.name.first} {person.name.last}</div>
                <img key={person.name.first + person.large + index} src={person.large} alt={person.name.first} />
              </div>

            )
          })}
        </div>
      </div>
    )
  }
}