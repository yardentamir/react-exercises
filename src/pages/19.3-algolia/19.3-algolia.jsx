import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import Spinner from '../../Components/9.1-spinnerComp';

export default function ShowText() {

  const [termState, setTerm] = useState('');
  const [queryState, setQuery] = useState("hooks");
  const [dataState, setData] = useState([]);
  const [spinnerState, setSpinner] = useState(true);

  console.log(dataState)

  useEffect(() => {
    setData([]);
    setSpinner(true);
    const getData = async () => {
      try {
        const { data: { hits } } = await axios.get(`https://intense-mesa-62220.herokuapp.com/http://hn.algolia.com/api/v1/search?query=${termState}`);
        hits.forEach((hit) => {
          setData(oldArray => [...oldArray, hit.title]);
        });
        setSpinner(false);
      }
      catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [termState]);



  const renderData = () => {
    return dataState.map(countryName => {
      return (<ul>
        {countryName && <li key={uuidv4()}>{countryName}</li>}
      </ul>)
    })
  }

  const handelQueryChange = ({ target: { value } }) => {
    setQuery(value.toLowerCase());
  }

  const handelSearchClick = () => {
    setTerm(queryState);
  }


  return (
    <div>
      {spinnerState ? <Spinner /> :
        <>
          <CustomInput callback={handelQueryChange} text="Change query:" />
          <CustomButton callback={handelSearchClick} text="search" />
          {renderData()}
        </>
      }
    </div>
  )
}