import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import CustomButton from '../../Components/CustomButton';

export default function ShowText() {

  const [dataState, setData] = useState([]);
  const [isDisplayDataState, isDisplayDataText] = useState(false);
  const [buttonTextState, setbuttonText] = useState("Display Data");

  const renderData = () => {
    console.log("render", dataState)

    return dataState.map(countryName => {
      return <li key={uuidv4()}>{countryName}</li>
    })
  }

  const handelClick = () => {
    isDisplayDataText(!isDisplayDataState);
    if (!isDisplayDataState) {
      const getData = async () => {
        const { data } = await axios.get('https://intense-mesa-62220.herokuapp.com/https://restcountries.herokuapp.com/api/v1/');
        const names = data.map(countryInfo => countryInfo.name.common);
        setData(names);
        console.log(names)
      }
      getData();

      setbuttonText("Hide Data");
    } else {
      setbuttonText("Display Data");
      setData([])
    }
  }

  function debounce(func, duration) {
    let timeout
    return function (...args) {
      const effect = () => {
        timeout = null;
        return func.apply(this, args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(effect, duration)
    }
  }

  return (
    <div>
      <CustomButton text={buttonTextState} callback={debounce(function () { handelClick() }, 1000)} />
      <ul>
        {renderData()}
      </ul>
    </div>
  )
}