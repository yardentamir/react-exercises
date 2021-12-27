import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export default function ShowText() {


  const [dataState, setData] = useState([]);

  // console.log('i run every render')
  // useEffect(() => {
  //     console.log('hi i run every render');
  // }, );
  // useEffect(() => {
  //     console.log('hi i render once');
  // }, []);
  // useEffect(() => {
  //     console.log('hi i render every time term changed');
  // }, [term]);

  console.log(dataState);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://intense-mesa-62220.herokuapp.com/https://swapi.dev/api/films/1/');
      setData(data);
    }
    getData();
  }, [])

  const renderData = () => {
    return (<h2>{dataState.title}, {dataState.director}</h2>)
  }

  return (
    <div>
      {renderData()}
    </div>
  )
}
