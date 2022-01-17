import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../Components/9.1-spinnerComp';
import Card from '../../Components/Card';
import CustomInput from "../../Components/CustomInput copy"
import CustomButton from "../../Components/CustomButton";

export default function BanKApi() {

  const [dataState, setData] = useState([]);
  const [spinnerState, setSpinner] = useState(true);
  const [inputValues, setinputValues] = useState({});
  // const proxy = "https://intense-mesa-62220.herokuapp.com/";

  const getData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/users/loadUsers`);
      console.log(data)
      setData(data);
      setSpinner(false);
    }
    catch (err) {
      console.log(err);
    }
  }

  // const getDataWithCash = async () => {
  //   try {
  //     const { data } = await axios.get(`http://localhost:3000/users/loadUsersWithCash/${inputValues.cash}`);
  //     console.log(data)
  //     setData(data);
  //     setSpinner(false);
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // }

  const addUser = async () => {
    console.log(inputValues)
    try {
      const { data } = await axios.post(`http://localhost:3000/users/addUser`, inputValues);
      console.log(data)
      setData(data);
      setSpinner(false);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setData([]);
    setSpinner(true);
    getData();
  }, []);

  const renderData = () => {
    return dataState.map(user => {
      return (<>
        {user && <Card key={user.id} id={user.id} cash={user.cash} credit={user.credit} isActive={user.isActive ? "true" : "false"} />}
      </>
      )
    })
  }

  const renderInputs = () => {
    const keys = Object.keys(dataState[0]);
    return keys.map(key => {
      return <CustomInput key={key} type="text" text={key} name={key} callback={handleInputChange} />
    })
  }



  const handleInputChange = ({ target: { name, value } }) => {
    if (value === "true" || value === "false") {
      value = value === "true";
    } else {
      value = +value;
    }
    setinputValues({ ...inputValues, [name]: value });
  }

  return (
    <>
      {spinnerState ? <Spinner /> :
        <>
          <div className="flex">
            {renderData()}
          </div>
          <form>
            {renderInputs()}
            <CustomButton text="add" callback={addUser} />
          </form>
        </>
      }
    </>
  )
}