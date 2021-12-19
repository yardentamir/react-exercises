import React from 'react';
import axios from 'axios';
import ButtonComp from '../../Components/11.3-ButtonComp';

export default class CheckNuris extends React.Component {

  state = {
    randomJoke: "",
    categories: [],
    jokeBasedOnCategory: "",
  }

  getDataApiRequest = async (type) => {
    return axios.get(`https://api.chucknorris.io/jokes/${type}`).then(res => {
      switch (type) {
        case "random":
          this.setState({ randomJoke: res.data.value });
          break;
        case "categories":
          this.setState({ categories: res.data });
          break;

        default:
          this.setState({ jokeBasedOnCategory: res.data.value });
          break;
      }
    })
  }

  renderCategories = () => {
    return this.state.categories.map((category, index) => {
      return (
        <>
          <br />
          <ButtonComp key={category + index} text={category} value={category} callback={({ target: { value } }) => this.getDataApiRequest(`random?category=${value}`)} />
        </>
      )
    })
  }

  render() {
    return (
      <div>
        <ButtonComp key="randomJokeNuris" callback={() => this.getDataApiRequest("random")} text="GET JOKE" />
        <br />
        {this.state.randomJoke}
        <br /><br />
        <ButtonComp key="categoriesJokeNuris" callback={() => this.getDataApiRequest("categories")} text="GET CATEGORIES" />
        {this.state.categories && this.renderCategories()}
        <br /><br />
        {this.state.jokeBasedOnCategory}
      </div>
    )
  }
}




// export default class PersonList extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.persons.map(person => <li>{person.name}</li>)}
//       </ul>
//     )
//   }
// }