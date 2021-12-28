import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ButtonComp from '../../Components/CustomButton';

export default function CheckNuris() {

  const [randomJoke, setRandomJoke] = useState('');
  const [jokeBasedOnCategory, setJokeBasedOnCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [whichButton, setwhichButton] = useState('');

  useEffect(() => {
    const getDataApiRequest = async () => {
      try {
        axios.get(`https://api.chucknorris.io/jokes/${whichButton}`).then(res => {
          switch (whichButton) {
            case "random":
              setRandomJoke(res.data.value);
              break;
            case "categories":
              setCategories(res.data);
              break;

            default:
              setJokeBasedOnCategory(res.data.value);
              break;
          }
        })
      } catch (e) {
        console.log("error")
      }
    }
    getDataApiRequest();
  }, [whichButton]);


  const renderCategories = () => {
    return categories.map((category, index) => {
      return (
        <>
          <br />
          <ButtonComp key={category + index} text={category} value={category} callback={({ target: { value } }) => setwhichButton(`random?category=${value}`)} />
        </>
      )
    })
  }

  return (
    <div>
      <ButtonComp key="randomJokeNuris" callback={() => setwhichButton("random")} text="GET JOKE" />
      <br />
      {randomJoke}
      <br /><br />
      <ButtonComp key="categoriesJokeNuris" callback={() => setwhichButton("categories")} text="GET CATEGORIES" />
      {categories && renderCategories()}
      <br /><br />
      {jokeBasedOnCategory}
    </div>
  )

}
