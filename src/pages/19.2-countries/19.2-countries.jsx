import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import CustomInput from '../../Components/CustomInput';

export default function ShowText() {

  const [dataState, setData] = useState([]);
  const [dataFilterState, setFilterData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://intense-mesa-62220.herokuapp.com/https://restcountries.herokuapp.com/api/v1/');
      data.forEach((countryInfo) => {
        setData(oldArray => [...oldArray, countryInfo.name.common]);
        setFilterData(oldArray => [...oldArray, countryInfo.name.common]);
      });
    }
    getData();
  }, [])

  const renderData = () => {
    return dataFilterState.map(countryName => {
      return <li key={uuidv4()}>{countryName}</li>
    })
  }

  const handelSearchChange = ({ target: { value } }) => {
    setFilterData(dataState);
    const filteredArr = dataState.filter((country) => country.toLowerCase().startsWith(value.toLowerCase()));
    setFilterData(filteredArr);
  }

  return (
    <div>
      <CustomInput callback={handelSearchChange} text="Search" />
      <ul>
        {renderData()}
      </ul>
    </div>
  )
}